import {setLocalStorage, getFromLocalStorage} from './local-storage';

const ENC_KEY = 'm1XR6ajgepqyh^7&21012G$%_q90)hte====';
// const BASE_URL = 'https://mara.co.ke';  
const BASE_URL = "https://staging.maraplus.com/api/v1/";

const makeRequest = async ({url, method, data = null, use_jwt = false, is_basic_auth = false}) => {

    url = BASE_URL + url;
    let headers = {
        "accept": "*/*"
    };

    let user = getFromLocalStorage('user');

    const updateUserSession = () => {
        if (user) {
            setLocalStorage('user', user);
        }
    }
    let jwt = null;

    if (use_jwt) {
        const sign = require('jwt-encode');
        const payload = {
            ...data,
            iat: Math.floor(Date.now() / 1000) + (1 * 60)
        };
        jwt = sign(payload, ENC_KEY);

        url += (url.match(/\?/g) ? '&' : '?') + 'token=' + jwt;
        data = null;
    } else {
        
        if (is_basic_auth) {
            const auth = Buffer.from(`${data.username}:${data.password}`).toString("base64");
            headers = {...headers, Authorization: `Basic ${auth}`}
            data = null;
            method = "GET";

        }
        headers = {...headers, ...{"content-type": "application/json"}}
    }

    const token = user?.token;

    if (token) {
        headers = {...headers, ...{Authorization: "Bearer " + token}}
    }

    try {
        let request = {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: headers,
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }
        if (data) {
            request['body'] = JSON.stringify(data)
        }
       
        const response = await fetch(url, request);
        let result= await (response.json() ||  response.text());
        let status = response?.status;
        return [status, result];
    } catch (err) {
        console.log("Got an error", err)
        let status = err.response?.status,
            result = err.response?.data;
        return [status, result]
    } finally {
        updateUserSession();
    }
};

export default makeRequest;

