

const EmptyRecords = (props) => {
    const {itemname} = props;
    return (
        <>
            <tr className="w-full"><td className="p-3 bg-gray-200 text-700">No {itemname} found</td></tr>
        </>
    )
}

export default EmptyRecords;