import { Link } from "react-router-dom";

function ViewNavigation({ title }) {
    return (
        <div className="flex text-[16px] my-[24px]">
            <Link to="/">
                <p className="py-2 px-2 hover:underline text-[var(--color-text)]">Trang Chủ</p>
            </Link>

            <span className="py-2">/</span>

            <p className="py-2 px-2 hover:underline text-[var(--color-text)]">
                Sản Phẩm
            </p>

            <span className="py-2">/</span>

            <p className="py-2 px-2 font-medium text-[var(--secondary-color)]">
                {title}
            </p>
        </div>
    );
}

export default ViewNavigation;
