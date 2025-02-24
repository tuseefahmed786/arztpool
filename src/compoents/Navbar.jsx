import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assests/arztpool.svg'
import SideBar from './SideBar'
function Navbar() {
  // const { cart } = useSelector((state) => state.searchProduct)
  return (
    <>
      <div className='flex justify-between items-center px-5 py-3'>
        <img src={logo} alt="" />
        <div className='flex gap-5'>
          <button className='py-3 px-5 rounded-sm text-white bg-[#173968]'>My Doctor Pool</button>
          <svg className='w-8' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path></svg>
        </div>
      </div>

    <div className='flex'>
    <SideBar/>
    <Outlet />
    </div>
    </>
  )
}

export default Navbar