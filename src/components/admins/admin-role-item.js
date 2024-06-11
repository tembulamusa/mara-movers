import React from 'react';
import { MDBSwitch } from 'mdb-react-ui-kit';

const AdminRoleItem = (props) => {
    const {role, key} = props;
    return (
        <tr className="w-full">
            <td className="p-2 border border-purple-60 flex xlex-row">{role.roleName}</td>
            <td className='p-2 border border-purple-60 w-10'>{role.hasPermission}<MDBSwitch id='flexSwitchCheckDefault'/></td>
        </tr>
    )
}


export default AdminRoleItem;