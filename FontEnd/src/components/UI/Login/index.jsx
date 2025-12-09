import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "../../../assets/Icon";
import { Link } from "react-router-dom";
import { getToken, setToken } from "../../../utils/auth";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const Checkuser = () => {
        const email = getToken("userToken");
        const pass = getToken("userTokenpass");

        console.log("Email lưu:", email);
        console.log("Password lưu:", pass);

        return { email, pass };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, pass } = Checkuser();

        if (email === form.email && pass === form.password || form.email == "user@gmail.com" && form.password == "123") {
            setToken("check", "true");
            alert("Đăng nhập thành công!");
            navigation.navigate("/");
        } else {
            alert("Email hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="w-full max-w-[400px] min-h-[500px] mx-auto px-6 py-10">
            <div className="flex flex-col border rounded shadow-sm p-6">

                {/* Logo */}
                <div className="mx-auto mb-4">
                    <img
                        src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                        alt="Login Icon"
                        className="w-16 h-16"
                    />
                </div>

                {/* Heading */}
                <h5 className="text-lg font-bold text-center mb-6">Đăng Nhập Tài Khoản</h5>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label className="text-xs font-bold text-[#777777] block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="border h-[36px] w-full px-2 rounded"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-xs font-bold text-[#777777] block mb-1">Mật Khẩu</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="border h-[36px] w-full px-2 pr-10 rounded"
                                required
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[var(--secondary-color)] text-white font-medium text-sm py-2 rounded hover:opacity-90 transition"
                    >
                        Đăng Nhập
                    </button>
                </form>

                {/* Quên mật khẩu */}
                <p className="text-sm text-center mt-4 underline cursor-pointer text-gray-600 hover:text-black">
                    Quên mật khẩu?
                </p>

                {/* Đăng ký */}
                <div className="mt-6 text-center">
                    <p className="text-sm mb-2">Bạn chưa có tài khoản?</p>
                    <Link to="/register">
                        <button
                            type="button"
                            className="w-full border border-[var(--secondary-color)] text-[var(--secondary-color)] font-medium text-sm py-2 rounded hover:bg-[var(--secondary-color)] hover:text-white transition"
                        >
                            Đăng Ký
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
