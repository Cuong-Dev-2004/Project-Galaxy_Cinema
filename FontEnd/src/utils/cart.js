// Lấy giỏ hàng
export function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

// Lưu & emit event
export function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("update-cart"));
}

// Thêm vào giỏ hàng
export function addToCart(product, quantity = 1) {
    const cart = getCart();
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist) {
        exist.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart(cart);
}


// Xoá sản phẩm
export function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
}

// Update số lượng
export function updateQuantity(id, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity = quantity <= 1 ? 1 : quantity;
        saveCart(cart);
    }
}
