import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { BsTicketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function ItemMovie({ props = {}, size = "small" }) {
    const [showTrailer, setShowTrailer] = useState(false);
    const config = {
        small: { widthClass: "w-1/4", SizeImg: "w-full h-auto" },
        medium: { widthClass: "w-full", SizeImg: "w-[400px] h-[250px] object-cover" },
        large: { widthClass: "w-full", SizeImg: "w-full h-auto object-cover" },
    };

    const { widthClass, SizeImg } = config[size] || config.small;

    return (
        <>
            {/* Card phim */}
            <div className={`flex flex-col ${widthClass} p-2`}>
                <div className="relative group w-fit">
                    <img src={props.poster_url} alt={props.title} className={SizeImg} />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none" />

                    {/* Nút overlay */}
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <div className="flex flex-col space-y-2 items-center">
                            <Link to={`/DatVe/${props.slug}`}>
                                <button className="flex items-center text-white px-4 py-2 rounded bg-[#ff5722] hover:bg-[#fb9440] font-semibold">
                                    <BsTicketFill />
                                    <span className="pl-2">Mua Vé</span>
                                </button>
                            </Link>

                            {size === "large" && (
                                <button
                                    onClick={() => setShowTrailer(true)}
                                    className="w-full text-white px-4 py-2 rounded border border-white hover:bg-[#d47a2f] font-semibold"
                                >
                                    Trailer
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="absolute flex items-center gap-1 bottom-[15px] right-[15px] bg-black opacity-75 text-xl">
                        <span className="p-1 rounded text-yellow-500">
                            <IoIosStar />
                        </span>
                        <span className="text-white font-semibold">{props.rating}</span>
                    </div>
                </div>
                <p className="mt-2 text-center font-medium">{props.title}</p>
            </div>

            {/* Modal Trailer */}
            {showTrailer && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative w-[80%] max-w-4xl bg-black rounded-lg overflow-hidden">
                        {/* Nút đóng */}
                        <button
                            onClick={() => setShowTrailer(false)}
                            className="absolute top-2 right-2 text-white bg-black/50 rounded-full px-3 py-1 font-bold z-10"
                        >
                            ✕
                        </button>

                        {/* Iframe YouTube */}
                        <iframe
                            width="100%"
                            height="500"
                            src={props.trailer_url.replace("watch?v=", "embed/")}
                            title={props.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemMovie;
