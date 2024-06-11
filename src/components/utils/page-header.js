import React from "react";
const PageHeader = (props) => {
    const {title} = props;

    return (
        <section className="page-header border-b border-gray-300 capitalize">
            <div className="text-whie text-2xl font-bold">
                <div className="container py-3 text-gray-500">
                    <h1>{title}</h1>
                </div>
            </div>
                
            </section>
    )
}

export default React.memo(PageHeader)