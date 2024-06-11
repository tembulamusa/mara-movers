import Supplier from "./supplier";

const Suppliers = [
    {
        name: "some name",
        role: "some role",
        items: "items",
        status: "open"
    },
    {
        name: "some name2",
        role: "some role2",
        items: "items2",
        status: "awarded"
    },
    {
        name: "some name3",
        role: "some role3",
        items: "items3",
        status: "status2"
    },
    {
        name: "some name3",
        role: "some role3",
        items: "items3",
        status: "status2"
    },
    {
        name: "some name3",
        role: "some role3",
        items: "items3",
        status: "status2"
    },
    {
        name: "some name3",
        role: "some role3",
        items: "items3",
        status: "status2"
    },
]

const LatestSuppliers = (props) => {
    return (
        <>
            <table className="table-auto w-full text-sm text-gray-500 px-3 ">
                <tbody className="w-full ">
                    <Supplier suppliers = {Suppliers} />
                </tbody>
            </table>
        </>
    )
};


export default LatestSuppliers;