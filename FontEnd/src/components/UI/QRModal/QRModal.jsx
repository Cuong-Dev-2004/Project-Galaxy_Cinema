// QRModal.jsx
export default function QRModal({ open, onClose, value, accountName, accountNumber, amount }) {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-[360px]"
            >
                <h2 className="text-xl font-bold mb-4">Thanh toán bằng QR</h2>

                {accountName && accountNumber && (
                    <div className="mb-3 text-left text-sm text-gray-700">
                        <p><span className="font-semibold">Tên:</span> {accountName}</p>
                        <p><span className="font-semibold">Số tài khoản:</span> {accountNumber}</p>
                        {amount && <p><span className="font-semibold">Số tiền:</span> {amount.toLocaleString('vi-VN')}₫</p>}
                    </div>
                )}

                <div className="bg-white p-3 rounded mx-auto border inline-block">
                    <img src={value} alt="QR thanh toán" className="w-[220px] h-[220px]" />
                </div>

                <button
                    className="mt-5 px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={onClose}
                >
                    Đóng
                </button>
            </div>
        </div>
    );
}
