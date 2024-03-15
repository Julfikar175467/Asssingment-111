
import './App.css'
import Header from './component/header/header'
import Banner from './component/main/banner'

function App() {
  

  return (
    <>
      
      <div className='w-[1280px] mx-auto px-4 pt-5'>
         <Header></Header>
        {/* -------------------------main part-------------- */}
         <div>
          <Banner></Banner>
         </div>
      </div>
      
    </>
  )
}

export default App
