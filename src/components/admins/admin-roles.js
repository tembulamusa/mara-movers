import React, {useState, useCallback, useEffect, useContext} from "react";
import { Modal } from "react-bootstrap";
import makeRequest from "../utils/fetch-request";
import {getFromLocalStorage} from '../utils/local-storage'; 
import { Context } from "../../context/store";
import {toast, ToastContainer} from 'react-toastify';
import AdminRoleItem from "./admin-role-item";


const AdminRoles = (props) => {
    const {selecteduserid} = props;
    const [state, distpatch] = useContext(Context);
    const [roles, setRoles] = useState([]);
    const [isRequesting, setIsRequesting] = useState(true); 


    const Notify = (message) => {
        let options = {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 673738 /* this is hack to prevent multiple toasts */
        }
        if (message.status === 200) {
            toast.success(`🚀 ${message.message}`, options);
        } else {
            toast.error(`🦄 ${message.message}`, options);
        }

    };
    const getAllUserRoles = () => {
        let endpoint = `/roles`;

        makeRequest({url: endpoint, method: 'GET' }).then(([status, response]) => {

            setIsRequesting(false)
            if ([200, 201, 204].includes(status)) {
                // dispatch({type:"SET", key:"showloginmodal", payload:false})
                setRoles(response?.message);

                let endpoint = `/user/${selecteduserid}/roles`;
                makeRequest({url: endpoint, method: 'GET' }).then(([status, response]) => {

                    if ([200, 201, 204].includes(status)) {
                        // dispatch({type:"SET", key:"showloginmodal", payload:false})
                        let userRoles = response?.message?.roles;
                        roles.map((role, index) => {
                            if (userRoles.includes(role)) {
                                roles[index].hasPermission = true;
                            } else {
                                roles[index].hasPermission = false;
                            }
                     })
                    } else {
                        let message = {
                            status: status,
                            message: response?.message?.status || "Error fetching user roles."
                        };
                        Notify(message);
                    }
                })

            } else {
                let message = {
                    status: response.status,
                    message: response?.status || "Error fetching Roles."
                };
                Notify(message);
            }
        })

    }

    
    useEffect(() => {
        getAllUserRoles();
     }, []);

    return (
        <>
            <h2 className="text-2xl">Roles</h2>

            <table className="w-full">
                <tbody className="[&>*:nth-child(even)]:bg-purple-50 w-full">
                    {roles.map((role, index) => (
                        <AdminRoleItem role={role} key={role.roleId} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AdminRoles;