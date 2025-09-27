import { useEffect, useState, useRef } from "react";
import { FaRegEye } from "../../../assets/Icon"
function ContentList_SideLine_Movie({ Data }) {
    const [countArray, setCountArray] = useState(0);
    const containerRef = useRef(null);
    const pageSize = 8;
    const TotalsPage = Math.ceil(Data.length / pageSize);
    const visibleItems = Data.slice(countArray, countArray + 8);


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [countArray])

    return (
        <div className="py-2">
            {visibleItems.map((element, index) => (
                <div className="flex mb-2 flex justify-start gap-2 md:gap-4" key={element.id || index} >
                    {/* Left */}
                    <div className="md:w-[255px] w-auto">
                        <img src={element.picture} alt={element.title || "image"} className="rounded w-[109px] h-[79px] md:w-[255px] md:h-[170px] object-cover" />
                    </div>

                    {/* Right */}
                    <div className="w-full">
                        <h3 className="text-black-10 text-sm md:text-[#333] md:text-lg font-semibold md:font-semibold not-italic transition-all duration-500 ease-in-out item__title">{element.title}</h3>
                        <span className="flex flex-wrap items-center gap-2">
                            <span className="text-white mr-2 bg-blue-400 hover:bg-blue-600  rounded text-xs py-1 px-[10px] md:px-5">Thích</span>
                            <span className="flex items-center text-xs bg-gray-200 rounded mr-2 py-1 px-5">
                                <FaRegEye className="mr-1" />
                                {element.luotXem}
                            </span>
                        </span>
                        <p className="mt-2 overflow-hidden text-ellipsis line-clamp-3 text-[color:var(--color-text)] text-ml font-normal ">{element.description}</p>
                    </div>
                </div>
            ))}

            <div className="flex justify-center mt-4 space-x-2">
                {[...Array(TotalsPage).keys()].map((pageIndex) => (
                    <button
                        key={pageIndex}
                        className={`px-4 py-2 rounded ${countArray === pageIndex * pageSize
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                        onClick={() => setCountArray(pageIndex * pageSize)}
                    >
                        {pageIndex + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ContentList_SideLine_Movie;
