import { useState } from "react";
import { setToken, getToken } from "../../../utils/auth";
export default function RegisterForm() {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
            return;
        }
        setToken("userToken", form.email);
        setToken("userTokenpass", form.password);
        alert("Đăng ký thành công!");
        navigation.navigate("/login");


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Đăng ký tài khoản</h2>

                <label className="block mb-2 font-medium">Họ và tên</label>
                <input
                    type="text"
                    name="fullname"
                    className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nhập họ tên"
                    onChange={handleChange}
                    required
                />

                <label className="block mb-2 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nhập email"
                    onChange={handleChange}
                    required
                />

                <label className="block mb-2 font-medium">Mật khẩu</label>
                <input
                    type="password"
                    name="password"
                    className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nhập mật khẩu"
                    onChange={handleChange}
                    required
                />

                <label className="block mb-2 font-medium">Xác nhận mật khẩu</label>
                <input
                    type="password"
                    name="confirmPassword"
                    className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nhập lại mật khẩu"
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
                >
                    Đăng ký
                </button>
            </form>
        </div>
    );
}
