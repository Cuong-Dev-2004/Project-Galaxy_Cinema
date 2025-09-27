import Tippy from "@tippyjs/react";
import { memo } from "react";

// UI

import { Menulist, MenuTitle } from "../../UI/index";

// Database
import { Films, Products, sideLinesMove, EvenMovie } from "../../../ApiClone/Databases";


// Icon
import { CiSearch, FaChevronDown } from "../../../assets/Icon/index"
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className="h-[114px]">
            <div className="flex items-center justify-evenly h-full px-6">
                {/* Logo */}
                <span className="w-[140px] h-[114px] flex justify-center items-center">
                    <Link to="/">
                        <img
                            src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
                            alt="Galaxy Logo"
                            className="max-h-full object-contain"
                        />
                    </Link>
                </span>

                {/* Navigation */}
                <ul className="flex items-center">

                    <li className="mr-4 cursor-pointer flex justify-center items-center w-[100px]">
                        <img
                            src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp"
                            alt="Mua vé"
                            className="w-[100px] h-[40px]"
                        />
                    </li>
                    <Tippy content={<Menulist Data={Films} />} interactive={true} placement="bottom-start" delay={[0, 0]} hideOnClick={true}>
                        <li className="px-4 py-4 cursor-pointer text-base text-[--color-text] hover:text-(--secondary-color) flex items-center gap-2">
                            Phim <FaChevronDown />
                        </li>
                    </Tippy>
                    <Tippy content={<MenuTitle Data={Products} />} interactive={true} placement="bottom" delay={[0, 0]} hideOnClick={true}><li className=" px-1 py-4 cursor-pointer text-base text-(--color-text) hover:text-(--secondary-color) flex items-center gap-2">Sản Phẩm <FaChevronDown /></li></Tippy>
                    <Tippy content={<MenuTitle Data={sideLinesMove} />} interactive={true} placement="bottom" delay={[0, 0]} hideOnClick={true}><li className=" mx-2 px-1 py-4 cursor-pointer text-base text-(--color-text) hover:text-(--secondary-color) flex items-center gap-2">Góc Điện Ảnh <FaChevronDown /></li></Tippy>
                    <Tippy content={<MenuTitle Data={EvenMovie} />} interactive={true} placement="bottom" delay={[0, 0]} hideOnClick={true}><li className="mx-2 px-1 py-4 cursor-pointer text-base text-(--color-text) hover:text-(--secondary-color) flex items-center gap-2">Sự Kiện <FaChevronDown /></li></Tippy>
                    <Tippy content={<MenuTitle Data={Films} />} interactive={true} placement="bottom" delay={[0, 0]} hideOnClick={true}><li className="mx-2 px-1 py-4 cursor-pointer text-base text-(--color-text) hover:text-(--secondary-color) flex items-center gap-2">Rạp/Giá Vé <FaChevronDown /></li></Tippy>

                </ul>

                {/* Right Menu */}
                <ul className="flex items-center space-x-4">
                    <li className="cursor-pointer text-xl hover:text-(--secondary-color) text-base text-(--color-text)">
                        <CiSearch className="w-6 h-6" />
                    </li>
                    <Link to={"/Login"}>
                        <li className="cursor-pointer hover:text-(--secondary-color) text-base text-(--color-text)">Đăng Nhập</li>
                    </Link>
                    <li className="cursor-pointer">
                        <img
                            src="https://www.galaxycine.vn/media/2024/11/11/join-member-Gstar.svg"
                            alt="G-Star"
                            className="h-[40px]"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default memo(Header);
