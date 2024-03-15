

const Header = () => {
    return (
        <div className="flex gap-10 justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Best Option</h1>
              </div>
              {/* ------------------- */}
              <div>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
              </div>
                {/* ------------------------  */}
                <div>
                    <button className="btn">Log In</button>
                </div>
        </div>
    );
};

export default Header;