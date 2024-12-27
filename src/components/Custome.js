import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { PiResizeDuotone } from "react-icons/pi";
import { CgAppleWatch } from "react-icons/cg";
import { FaSwatchbook } from "react-icons/fa";

const Custome = () => {
  const [openCollection , setOpenCollection] = useState(false)
  const [sideView , setSideView] = useState(false)
  return (
    <div>
      <div>
        <ul className='p-8 flex justify-between items-center'>
            <li className='font-semibold text-xl'>Watch</li>
            <li className='flex flex-col' >
                <div className='flex items-center cursor-pointer' onClick={()=>setOpenCollection(!openCollection)}>
                Collections<IoIosArrowDown className='mt-1 ml-1'/>
                </div>
                
               {openCollection && <div className='w-[300px] absolute text-center '>
                <div className='fixed top-0 left-0 w-full h-screen bg-black/45' onClick={()=>setOpenCollection(false)}></div>
                    <ul className='px-4 relative border-2 top-10 rounded-2xl -left-20 bg-white'>
                      <li className='p-4 border-b-2 text-gray-500'>Apple Watch Series 10</li>
                      <li className='p-4 border-b-2'>Apple Watch Hemeres Series 10</li>
                      <li className='p-4'>Apple Watch SE</li>
                    </ul>
                </div> }
            </li>
            <li><button className='bg-blue-500 px-4 py-1 text-white rounded-full'>Save</button></li>
        </ul>
      </div>
      <div className='flex justify-center mb-6'>
        {sideView?<img className='w-[330px] h-[330px]' src="/apple2.jpeg" alt="loading..." />:<img className='w-[330px] h-[330px]'  src="/apple1.jpeg" alt="loading..." />}
      </div>
      <div className='text-center '>
                {sideView?<p className='text-blue-500 underline text-sm cursor-pointer' onClick={()=>{setSideView(false)}}>Side View</p>:<p onClick={()=>setSideView(true)} className='text-blue-500 underline text-sm cursor-pointer'>Front View</p>}
                <p className='text-gray-500'>Apple Watch Series 10</p>
                <p>46mm Jet Black Aluminum Case with Black Solo Loop</p>
                <p className='text-gray-600'>From $429</p>
                <div className='mb-20'>
                  <ul className='flex flex-row justify-center mt-3'>
                    <li><div className='bg-gray-100 px-6 py-2 mx-2 rounded-full flex items-center text-lg'> <PiResizeDuotone className='mr-1'/> Size</div></li>
                    <li><div className='bg-gray-100 px-6 py-2 mx-2 rounded-full flex items-center text-lg'><CgAppleWatch className='mr-1'/>Case</div></li>
                    <li><div className='bg-gray-100 px-6 py-2 mx-2 rounded-full flex items-center text-lg'><FaSwatchbook className='mr-1'/>Band</div></li>
                  </ul>
                </div>
          </div>
    </div>
  )
}

export default Custome
