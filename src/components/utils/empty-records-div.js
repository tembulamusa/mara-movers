import React from "react";
const EmptyRecordsDiv = (props) => {
    const {itemname} = props;
    return (
        <div className="w-full bg-gray-200 text-gray-700">Records for {itemname} not found</div>
    )
}

export default React.memo(EmptyRecordsDiv);