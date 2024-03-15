import PropTypes from 'prop-types';


const Table = ({table}) => {
    const{recipe_id,recipe_name,preparing_time,calories}=table
    return (
        <div className="flex justify-between gap-8 shadow rounded-xl my-5 p-5 ">
             <h1>{recipe_id}</h1>
             <h1>{recipe_name}</h1>
             <h1>{preparing_time}</h1>
             <h1>{calories}</h1>
             <button className='btn  bg-[#0BE58A] hover:bg-[#0BE58A] text-lg '>Preparing</button>
        </div>
    );
};
Table.propTypes={
    table: PropTypes.object
}
export default Table;