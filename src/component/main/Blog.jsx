
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {

    const { recipe_image,  recipe_name, short_description, ingredients, preparing_time, calories } = blog
    return (
        <div className="  border-[1px] border-gray-500 rounded-xl p-5 ">
            <img className="rounded-xl pb-5" src={recipe_image} alt="" />
            <h1 className="text-xl  capitalize font-bold">{recipe_name}</h1>
            <h1 className="pb-5">{short_description}</h1>
            <hr />
            <h1 className="text-xl font-bold pt-5">Ingredients: {ingredients.length}</h1>
            <div className="pb-5">
                {
                    ingredients.map((valu, index) => <li className="px-5" key={index}>{valu}</li>)
                }
            </div>
            <hr />
            <div className="flex justify-between py-5">
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>{preparing_time} Minutes</h1>
                </div>
                <div className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>

                    <h1>{calories}</h1>
                </div>

            </div>
            <button className="btn px-10 bg-[#0BE58A] hover:bg-[#0BE58A]">Watch Now</button>

        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object
}

export default Blog;