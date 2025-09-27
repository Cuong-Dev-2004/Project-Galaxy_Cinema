import { MdOutlineLocalGroceryStore } from "../../../assets/Icon/index";

function Button({ Title, Button = false, Icon = false }) {
    return (
        <div className="flex gap-2 text-white text-sm pb-3 px-3">
            <button className={`${Button && ("flex-1")} bg-[var(--secondary-color)] px-4 py-2 rounded hover:bg-[#ff5722] cursor-pointer`}>
                {Title}
            </button>

            {Button && (
                <button className="flex-1 font-medium text-sm border border-[var(--secondary-color)] text-[var(--secondary-color)] px-4 py-2 rounded hover:bg-[var(--secondary-color)] hover:text-white cursor-pointer flex items-center justify-center gap-1">
                    {Icon && <MdOutlineLocalGroceryStore />}
                    Thêm Vào Giỏ
                </button>
            )}
        </div>
    );
}

export default Button;
