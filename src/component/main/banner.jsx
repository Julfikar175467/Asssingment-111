import BannerLogo from "../img/20.jpg"

const Banner = () => {


    return (
        <div style={{ backgroundImage: `url(${BannerLogo})` }} className="h-[50vh] bg-cover bg-center  bg-no-repeat rounded-lg mt-10 md:px-52 md:pt-20 text-center text-white bg-blend-darken">
            <h1 className="md:text-5xl capitalize pb-5">Discover and exceptional cooking class tutorial for you</h1>
            <h4 className=''>Here are some tips for writing a good essay on cooking: Choose a clear and specific topic: Choose a topic that is relevant and specific to cooking, such as a particular dish, cooking method, or cuisine</h4>

            <div className="mt-5">
                <button className="btn px-10 bg-[#0BE58A] hover:bg-[#0BE58A] border-none rounded-full text-black capitalize text-xl">Explor Now</button>
                <button className="btn px-10 bg-transparent rounded-full ml-5 text-white capitalize text-xl hover:bg-transparent">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner