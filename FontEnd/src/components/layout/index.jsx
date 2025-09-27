import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
function Layout() {

    const location = useLocation();
    const hideSidebarRoutes = ["/Products", "/Infomation", "/News", "/404Page"];
    const showSidebar = !hideSidebarRoutes.includes(location.pathname);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div>
                {showSidebar && <SideBar />}
                <div className='w-full max-w-[1400px] mx-auto '>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Layout;