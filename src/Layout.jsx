// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { Outlet } from "react-router-dom";

// function Layout() {
//     return (
//        <>
//         <Navbar />
//         <Outlet />
//         <Sidebar />
//        </>
//     )
// }

// export default Layout


import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;

