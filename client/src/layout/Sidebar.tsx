import React from 'react'
import { RiMoneyDollarCircleLine,RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";

import { FiHome } from "react-icons/fi";
type Props = {}; 
const Sidebar = (props:Props) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-[#f7f7fa] text-white flex flex-col rounded-xl'> 
        <div className='flex border-transparent p-4 mb-4'>
            <RiMoneyDollarCircleLine className='text-4xl text-black'/> 
            <h1 className='px-2 text-2xl text-black'>Financio</h1>
        </div>
        <nav className="flex-1">
            <h1 className='px-4 text-[#d0d1d7] text-bold mb-4'>General</h1>
        <ul className="space-y-2">
            <li>
                <a href="#" className="flex items-center p-4 hover:bg-white rounded-xl">
                    <span className="material-icons mr-3 text-[#1b1b1e] "><FiHome /></span>
                    <p className='text-[#1b1b1e]'>Dashboard</p>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center p-4 hover:bg-white rounded-xl">
                    <span className="material-icons mr-3 text-[#9498a4]"><IoAnalytics /></span>
                    <p className='text-[#9498a4]'>Analytics</p>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-4 hover:bg-white  rounded-xl ">
                    <span className="material-icons mr-3 text-[#9498a4]"><RiSettingsLine /></span>
                    <p className='text-[#9498a4]'>Settings</p>
                </a>
            </li>
        </ul>
    </nav>

    <div className="p-4">
        <a href="#" className="flex items-center p-4 hover:bg-gray-700 rounded">
            <span className="material-icons mr-3">logout</span>
            Logout
        </a>
    </div>
</div>
  )
}

export default Sidebar