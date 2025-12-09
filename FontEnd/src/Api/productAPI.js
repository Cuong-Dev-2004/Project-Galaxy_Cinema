// File: ../../Api/productAPI.js

import axios from "axios";

// Thiết lập một instance Axios với baseURL chung
const API = axios.create({
    baseURL: "http://localhost:3000/v1",
});

/**
 * Lấy danh sách sản phẩm theo tên danh mục (category_title)
 * Sử dụng GET /products/category?category_title={tên}
 */
export const fetchProductsByCategory = async (category_title) => {
    try {
        const res = await API.get("/products/category", {
            params: {
                category_title: category_title
            },
        });

        return res.data;

    } catch (error) {
        // Xử lý lỗi Axios: Ném ra thông báo lỗi chi tiết hơn
        if (error.response) {
            // Lỗi từ server (4xx, 5xx)
            const errorMsg = error.response.data?.error || `Request failed with status ${error.response.status}`;
            throw new Error(errorMsg);
        } else if (error.request) {
            // Request được gửi đi nhưng không nhận được phản hồi
            throw new Error("No response received from server.");
        } else {
            // Lỗi xảy ra khi thiết lập request
            throw new Error(error.message);
        }
    }
};
