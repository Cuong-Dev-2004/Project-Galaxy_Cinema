import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQuantity } from "../../utils/cart";
import { Link } from "react-router-dom";
import QRModal from "../../components/UI/QRModal/QRModal.jsx";
import qr from "../../assets/qr.jpg";

function Cart() {
    const [cart, setCart] = useState([]);
    const [isQRVisible, setIsQRVisible] = useState(false);
    const [qrValue, setQrValue] = useState("");

    const refreshCart = () => setCart(getCart());

    useEffect(() => {
        refreshCart();
        window.addEventListener("update-cart", refreshCart);
        return () => window.removeEventListener("update-cart", refreshCart);
    }, []);

    const totalPrice = cart.reduce((sum, item) => {
        const price = Number(item.product_price.replace(/[^0-9]/g, ""));
        return sum + price * item.quantity;
    }, 0);

    // Hàm tạo Quick Link VietQR
    const generateMBQRLink = ({ accountNumber, accountName, amount, note }) => {
        const base = "https://img.vietqr.io/image";
        const bankCode = "mb"; // MB Bank
        const encodedName = encodeURIComponent(accountName);
        const encodedNote = encodeURIComponent(note);
        return `${base}-${bankCode}-${accountNumber}-compact2.jpg?amount=${amount}&addInfo=${encodedNote}&accountName=${encodedName}`;
    };

    const handleCheckout = () => {
        if (totalPrice <= 0) return;

        const qrLink = generateMBQRLink({
            accountNumber: "0903515732",
            accountName: "Hoàng Hữu Cường",
            amount: totalPrice,
            note: "Thanh toán giỏ hàng",
        });

        setQrValue(qrLink);
        setIsQRVisible(true);
    };

    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">Giỏ Hàng</h1>

            {cart.length === 0 ? (
                <p className="text-gray-500">
                    Giỏ hàng trống.
                    <Link to="/Products" className="text-blue-500 underline ml-2">
                        Mua sắm ngay
                    </Link>
                </p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center border p-4 rounded-lg shadow-sm justify-between"
                        >
                            <img
                                src={item.product_img}
                                alt={item.product_name}
                                className="w-[120px] h-[120px] object-cover rounded"
                            />

                            <div className="flex-1 px-4">
                                <p className="text-lg font-semibold">{item.product_name}</p>
                                <p className="text-red-600 font-bold">{item.product_price}</p>
                            </div>

                            <div className="flex items-center">
                                <button
                                    className="px-3 py-1 border rounded"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                    className="px-3 py-1 border rounded"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-600 font-bold ml-5 hover:text-red-800"
                            >
                                Xoá
                            </button>
                        </div>
                    ))}

                    <div className="text-right text-xl font-bold mt-6">
                        Tổng cộng:{" "}
                        <span className="text-red-600">
                            {totalPrice.toLocaleString("vi-VN")}₫
                        </span>
                    </div>

                    <div className="text-right mt-5">
                        <button
                            onClick={handleCheckout}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
                        >
                            Thanh Toán
                        </button>
                    </div>
                </div>
            )}

            {/* QR Modal */}
            <QRModal
                open={isQRVisible}
                onClose={() => setIsQRVisible(false)}
                value={qr}
                accountName="Hoàng Hữu Cường"
                accountNumber="0903515732"
                amount={totalPrice}
            />
        </div>
    );
}

export default Cart;
