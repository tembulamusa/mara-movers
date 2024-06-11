import React, {useState, useCallback, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../../context/store";



const AdminItem = (props) => {
    const {adminitem, key} = props;
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);

    const adminDetail = (adminUser) => {

        // throw the guy to the context state as current user
        dispatch({type: "SET", key: "selecteduserdetail", payload: adminUser})
        navigate(`/admin-details/${adminUser.userId}`);
    }

    return (
        <>
            <tr key={key} className="w-full" onClick={() => adminDetail(adminitem)}>
                <td className="p-2 border border-purple-70">{adminitem.firstName + " " + adminitem.lastName} </td>
                <td className="p-2 border border-purple-70">{adminitem.email}</td>
                <td className="p-2 border border-purple-70">{adminitem.msisdn}</td>
            </tr>
        </>
    )
}

export default AdminItem;