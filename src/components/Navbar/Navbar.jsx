import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const user = false
    return (
        <div className="flex justify-between border-b-4 p-5 items-center">
            <div className="flex items-center">
                <Link to="/">
                <img className="w-10 h-10 p-1" src="https://www.svgrepo.com/show/268549/music-player-repeat.svg" alt="logo" />
                </Link>
                <p>VideoTube</p>
            </div>
            <div className="flex w-150 gap-1  items-center h-10 border-4 pl-2">
                <IoIosSearch size={20} />
                <input type="text" placeholder="Search" className="text-lg max-w-[100%] outline-0" />    
            </div>
            {
                user ? (<div>profile</div>):(<div>
                <Link to="/login">
                    <button className="border-4 p-1.5 m-2 font-bold"> Log in </button>
                </Link>
                <Link to="/signup">
                    <button className="border-4 p-1.5 bg-purple-400 font-bold"> Sign up</button>
                </Link>
            </div>
            )
            }
        </div>
    )
}

export default Navbar
