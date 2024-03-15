
import './App.css'
import Header from './component/header/header'
import Blogs from './component/main/Blogs'
import Tables from './component/main/Tables'
import Banner from './component/main/banner'

function App() {


  return (
    <>

      <div className='w-[1280px] mx-auto px-4 pt-5'>
        <Header></Header>
        {/* -------------------------main part-------------- */}
        <div>
          <Banner></Banner>
          <div className='p-20 text-center'>
            <h1 className='text-3xl font-bold capitalize pb-5'>Our Recipe list</h1>
            <h4 className='md:px-56'>Here are some tips for writing a good essay on cooking: Choose a clear and specific topic: Choose a topic that is relevant and specific to cooking, such as a particular dish, cooking method, or cuisine</h4>
          </div>
          <div className='flex justify-between gap-10 mt-10'>
            <Blogs></Blogs>
            <Tables></Tables>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
