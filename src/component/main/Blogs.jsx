import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({btnHandel}) => {
    const [blogs, setBlogs] = useState([])
    const getBlog = async () => {
        const json = await fetch("recipe.json")
        const data = await json.json()
        setBlogs(data)
    }
    useEffect(() => {
        getBlog()
    }, [])
    return (
        <div className="mt-5 w-2/3 shadow px-5">
            <div className="grid grid-cols-2 gap-10 ">
                {
                    blogs.map((blog,index) => <Blog key={index} blog={blog} btnHandel={btnHandel}></Blog>)
                }
            </div>

        </div>
    );
};
Blogs.propTypes={
    btnHandel:PropTypes.func
}
export default Blogs;