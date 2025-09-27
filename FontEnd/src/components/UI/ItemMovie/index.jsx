import { useState } from "react";
import { IoIosStar, BsTicketFill } from "../../../assets/Icon/index";

function ItemMovie({ props, size = "small" }) {
    const [showTrailer, setShowTrailer] = useState(false);

    const config = {
        small: {
            widthClass: "w-1/4",
            SizeImg: "w-full h-auto",
            bottom: "bottom-[5%]",
            btnDirection: "flex-row",
        },
        medium: {
            widthClass: "w-full",
            SizeImg:
                "w-[400px] h-[250px] object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0",
            bottom: "bottom-[10%]",
            btnDirection: "flex-row",
        },
        large: {
            widthClass: "w-full",
            SizeImg: "w-full h-auto object-cover",
            bottom: "bottom-[15px]",
            btnDirection: "flex-col space-y-2",
        },
    };

    const { widthClass, SizeImg, bottom, btnDirection } =
        config[size] || config.small;

    return (
        <div className={`flex flex-col ${widthClass} p-2`}>
            <div className="relative group w-fit">
                <img
                    src={props.img_films}
                    alt={props.Name_Films}
                    className={SizeImg}
                />

                {/* Overlay đen mờ */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none" />

                {/* Nút "Mua Vé" + "Trailer" */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className={`flex ${btnDirection} items-center justify-center `}>
                        {/* Nút mua vé */}
                        <button className="flex items-center text-white px-4 py-2 rounded bg-[#ff5722] hover:bg-[#fb9440] font-semibold">
                            <BsTicketFill />
                            <span className="pl-2">Mua Vé</span>
                        </button>

                        {/* Nút trailer (chỉ khi large) */}
                        {size === "large" && (
                            <button className="w-full text-white px-4 py-2 rounded  border-1 border-white  hover:bg-[#d47a2f] font-semibold">
                                Trailer
                            </button>
                        )}
                    </div>
                </div>

                <div
                    className={`absolute flex items-center gap-1 ${bottom} right-[15px] bg-black opacity-75 text-xl`}
                >
                    <span className="p-1 rounded text-yellow-500">
                        <IoIosStar />
                    </span>
                    <span className="text-white font-semibold">{props.star}</span>
                </div>
            </div>

            <p className="mt-2 text-center font-medium">{props.Name_Films}</p>
        </div>
    );
}

export default ItemMovie;
