

const Supplier = (props) => {
    const { suppliers } = props;
    return (
        <>
        { suppliers?.map((supplier, index) => (
            <tr key={index} className="w-full bg-white border-b border-gray-100">
                <td className="p-2">
                    {supplier.name}
                </td>
                <td className="p-2">
                    {supplier.role}
                </td>
                <td className="p-2">
                    {supplier.items}
                </td>
            </tr>
        ))}
        </>
        )
}

export default Supplier;