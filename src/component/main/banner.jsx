import BannerLogo from "../img/22.jpg"

const Banner = () => {
    
    
    return (
        <div style={{ backgroundImage: `url(${BannerLogo})`}} className="h-[50vh] bg-cover bg-center  bg-no-repeat rounded-lg mt-10 md:px-52 md:pt-20 text-center text-white bg-blend-darken">
              <h1 className="md:text-5xl capitalize pb-5">Discover and exceptional cooking class tutorial for you</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum odio inventore, reprehenderit dignissimos cumque tempore libero laborum optio. Amet blanditiis magni quibusdam dolore excepturi?</h2>
              <div className="mt-5">
                 <button className="btn px-10 bg-[#0BE58A] rounded-full text-black capitalize">Explor Now</button>
                 <button className="btn px-10 bg-transparent rounded-full ml-5 text-white capitalize">Our Feedback</button>
              </div>
        </div>
    );
};

export default Banner