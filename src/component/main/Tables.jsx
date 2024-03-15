
import Table from "./Table";
const Tables = () => {
    return (
        <div className="w-1/3 p-5">
             <div className="flex justify-center items-center pb-5 ">
                <h1 className="text-3xl font-bold capitalize"> Want to Cook : 01</h1>
             </div>
             <hr />
            <div className="flex gap-10 justify-center items-center px-5 text-xl fond-bold pt-5">
                <h1>Name</h1>
                <h1>Times</h1>
                <h1>Caloris</h1>
            </div>
            <div>
                 <Table></Table>
            </div>
             <div className="text-center pb-5">
                 <h1 className="text-3xl font-bold capitalize">Currently Cooking : 02</h1>
             </div>
             <hr />
        </div>
    );
};

export default Tables;