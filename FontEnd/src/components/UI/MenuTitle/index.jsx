import { Link } from "react-router-dom";

function MenuTitle({ Data, type = "default" }) {
    // type = "default" | "products" | "news" ... để bạn điều hướng khác nhau
    return (
        <ul className="border border-[#eaeaea] bg-white py-2 text-center min-w-[230px] shadow-md rounded">
            {Data.map((item, index) => {
                // Xác định path dựa theo loại menu
                let path = item.path || `/news/${item.id || item.dataMovie_id}`;

                // Có thể gửi state thêm nếu cần
                const stateData =
                    type === "products"
                        ? { type: "products", index, title: item.title, list: Data }
                        : { type: type, index, title: item.title, list: Data };

                return (
                    <li
                        key={item.id || item.dataMovie_id}
                        className="px-3 py-2 cursor-pointer hover:text-[var(--secondary-color)] hover:bg-[#fafafa] text-[15px] transition-all"
                    >
                        <Link to={path} state={stateData} className="block w-full h-full">
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuTitle;
