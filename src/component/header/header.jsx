import logIn from "../img/login.png"

const Header = () => {
    return (
        <div className="flex gap-10 justify-between items-center">
              <div className="flex-1">
                <h1 className="text-3xl font-bold">Recipe <span className="text-[#0BE58A]">Calories</span></h1>
              </div>
              {/* ------------------- */}
              <div>
                <ul className="flex gap-10 justify-between capitalize text-xl">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
              </div>
                {/* ------------------------  */}
                <div className="flex ga-5 justify-between  items-center flex-1">
                   <h1>jarif</h1>
                    <img className="w-12 h-12 rounded-full cursor-pointer outline-1 outline-gray-200 border-2 border-black" src={logIn} alt="" />
                </div>
        </div>
    );
};

export default Header;