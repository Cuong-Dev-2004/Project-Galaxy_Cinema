import { Link } from "react-router-dom";

function MenuTitle({ Data }) {
    const isProducts = Data[0]?.path === "/Products";

    return (
        <ul className="border-2 border-[#f5f5f5] bg-white py-2 text-center min-w-[230px]">
            {Data.map((element, index) => (
                <li
                    key={element.id}
                    className="hover:border-l-2 border-[var(--secondary-color)] px-3 py-2 hover:pl-2 hover:text-[var(--secondary-color)] cursor-pointer"
                >
                    <Link
                        to={element.path}
                        state={
                            isProducts
                                ? { Data, index: element.id - 1, title: element.id === 1 ? "ATVNCG" : "GLX Merch" }
                                : { Data, index: element.title, id: index }
                        }
                        className="block w-full h-full"
                    >
                        {element.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MenuTitle;
