import PropTypes from 'prop-types';

import Table from "./Table";
const Tables = ({tables}) => {
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
                 {
                    tables.map((table,index)=><Table table={table} key={index}></Table>)
                 }
            </div>
             <div className="text-center pb-5">
                 <h1 className="text-3xl font-bold capitalize">Currently Cooking : 02</h1>
             </div>
             <hr />
             <div className="flex gap-10  justify-between items-center px-5 text-xl fond-bold pt-5">
                <h1>Name</h1>
                <h1>Times</h1>
                <h1>Caloris</h1>
            </div>
            <div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-20 text-xl font-bold px-5">
                <h1>Total Time:00</h1>
                <h1>Total Caloris:00</h1>
            </div>
        </div>
    );
};

Tables.propTypes={
    tables:PropTypes.object
}

export default Tables;