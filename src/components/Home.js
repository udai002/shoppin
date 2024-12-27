import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='p-6 px-10'><h1 className='font-semibold text-2xl'>Watch</h1></div>
      <div className='p-4 m-auto md:w-[50%] w-full'>
        <h1 className='text-lg my-3'>Apple Watch Studio</h1>
        <p className='font-bold text-6xl'>Choose a case. <br />
        Pick a band. <br />
        Create your own style.
        </p>
        <button className='bg-blue-500 px-4 py-2 rounded-full mt-10 text-white' onClick={()=>navigate("/watch")}>Get Started</button>
      </div>
      <div className='flex flex-row justify-center'>
        <img src="https://xtrasure.store/cdn/shop/files/AppleWatchSeries10GPS_46mmJetBlackAluminiumCasewithInkSportLoop_MWWR3.jpg?v=1726400062&width=500" alt="apple watch image" />
      </div>
    </div>
  )
}

export default Home
