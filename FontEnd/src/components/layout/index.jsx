import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
function Layout() {

    const location = useLocation();
    const hideSidebarRoutes = ["/Products", "/Infomation", "/News", "/404Page", "/ViewFilm"];
    const showSidebar = !hideSidebarRoutes.includes(location.pathname);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div >
                {showSidebar && <SideBar />}
                <main className=" bg-white rounded-2xl shadow p-6 w-full max-w-[1400px] mx-auto ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>

    );
}

export default Layout;