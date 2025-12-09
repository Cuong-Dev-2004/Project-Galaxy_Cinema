import { memo, useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { Link, useNavigate } from "react-router-dom";

import { Menulist, MenuTitle } from "../../UI";
import { Films, sideLinesMove, EvenMovie, DatabaseMovie } from "../../../ApiClone/Databases";


import { CiSearch, FaChevronDown } from "../../../assets/Icon";
import { getToken, removeToken } from "../../../utils/auth";
import { getCart } from "../../../utils/cart";

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    let databasefilm = [...Films, ...DatabaseMovie];
    useEffect(() => {
        setCartCount(getCart().length);
        window.addEventListener("update-cart", () => {
            setCartCount(getCart().length);
        });
    }, []);

    useEffect(() => {
        const token = getToken("check");
        if (token) setIsLogin(true);
    }, []);
    useEffect(() => {
        const updateCart = () => setCartCount(getCart().length);

        updateCart();
        window.addEventListener("update-cart", updateCart);

        return () => window.removeEventListener("update-cart", updateCart);
    }, []);

    const handleLogout = () => {
        removeToken("check");
        setIsLogin(false);
        navigate("/");
        window.location.reload();
    };

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

                    <Tippy content={<Menulist Data={Films} />} interactive placement="bottom-start">
                        <li className="px-4 py-4 cursor-pointer text-base text-[var(--color-text)] hover:text-[var(--secondary-color)] flex items-center gap-2">
                            Phim <FaChevronDown />
                        </li>
                    </Tippy>

                    <Tippy content={<MenuTitle Data={EvenMovie} />} interactive placement="bottom">
                        <li className="px-1 py-4 cursor-pointer flex items-center gap-1">
                            Sản Phẩm <FaChevronDown />
                        </li>
                    </Tippy>

                    <Tippy content={<MenuTitle Data={sideLinesMove} />} interactive placement="bottom">
                        <li className="px-1 py-4 cursor-pointer">Góc Điện Ảnh</li>
                    </Tippy>

                    <Tippy content={<MenuTitle Data={EvenMovie} />} interactive placement="bottom">
                        <li className="px-1 py-4 cursor-pointer">Sự Kiện</li>
                    </Tippy>

                    <Tippy content={<MenuTitle Data={Films} />} interactive placement="bottom">
                        <li className="px-1 py-4 cursor-pointer">Rạp/Giá Vé</li>
                    </Tippy>
                </ul>

                {/* Right Menu */}
                <ul className="flex items-center space-x-4">
                    <li>
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                            <input
                                type="text"
                                placeholder="Tìm kiếm phim..."
                                className="px-3 py-1 text-sm w-[200px] focus:outline-none"
                            />
                            <button className="bg-[var(--secondary-color)] px-3 flex items-center justify-center hover:bg-blue-600 transition">
                                <CiSearch className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </li>


                    {isLogin ? (
                        <li
                            onClick={handleLogout}
                            className="cursor-pointer hover:text-[var(--secondary-color)] text-base text-[var(--color-text)]"
                        >
                            Đăng Xuất
                        </li>
                    ) : (
                        <>
                            <Link to="/Login">
                                <li className="cursor-pointer hover:text-[var(--secondary-color)] text-base text-[var(--color-text)]">
                                    Đăng Nhập
                                </li>
                            </Link>

                            <Link to="/register">
                                <li className="cursor-pointer hover:text-[var(--secondary-color)] text-base text-[var(--color-text)]">
                                    Đăng Ký
                                </li>
                            </Link>
                        </>
                    )}

                    {/* Cart */}
                    <li className="cursor-pointer relative">
                        <Link to="/cart">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                                alt="Cart"
                                className="h-[30px]"
                            />

                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </li>

                    {/* G-Star */}
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
