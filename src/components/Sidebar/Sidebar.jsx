import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { BiSolidLike } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { FaBell } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import logoutApi from '../../api/logoutApi';

function Sidebar() {
    const {logout} = logoutApi()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await logout()
            console.log("Response: ", response);
            navigate("/login");
            
        } catch (error) {
           console.log("Logout failed:", error);
            alert("Logout not possible due to some internal error") 
        }
    }

    return (
        // <div className='grid grid-cols-6'>
            <div className='w-60 h-207 border-r-4'>
                < div className='flex items-center mt-10 m-3 h-10 border-4'>
                <Link to="/">
                    <div className=' flex gap-3 items-center p-3'>
                        <FiHome size={23}/>
                        <h1 className='text-xl '>Home</h1>
                    </div>  
                </Link>
                </div>
                < div className='flex items-center m-3 h-10 border-4'>
                     <div className='p-3'>
                        <BiSolidLike size={23}/>
                     </div>
                    <Link to="/liked-videos">
                        <h1 className='text-xl'>Liked Videos</h1>
                    </Link>
                </div>
                < div className='flex items-center m-3 h-10 border-4'>
                     <div className='p-3'>
                        <FaHistory size={23}/>
                     </div>
                    <h1 className='text-xl'>History</h1>
                </div>
                < div className='flex items-center m-3 h-10 border-4'>
                     <div className='p-3'>
                        <FaVideo size={23}/>
                     </div>
                    <h1 className='text-xl'>My Content</h1>
                </div>
                < div className='flex items-center m-3 h-10 border-4'>
                     <div className='p-3'>
                        <GoFileSubmodule size={23}/>
                     </div>
                    <h1 className='text-xl'>Collections</h1>
                </div>
                < div className='flex items-center m-3 h-10 border-4'>
                     <div className='p-3'>
                        <FaBell size={23}/>
                     </div>
                    <h1 className='text-xl'>Subscribers</h1>
                </div>
                    <button 
                    className='flex mt-90 p-15 gap-2 items-center text-xl text-red-600 font-bold'
                    onClick={handleLogout}
                    >
                        <span>Log out</span>
                        <IoIosLogOut />
                    </button>
            </div>         
    )
}

export default Sidebar
