import { Link } from "react-router-dom";
import { ItemMovie, InfomationText } from "../../../components/UI";
import { useState, useEffect } from "react";
import Tabs from "../../../components/UI/Tabs/Tabs";

function Movie_List_PageChil({ Films = [] }) {
    const [Tab, SetTab] = useState("now_showing");
    const [ItemFilms, SetItemFilms] = useState([]);

    useEffect(() => {
        if (Array.isArray(Films)) {
            const filtered = Films.filter(
                (item) => item.status === Tab || item.formats?.includes(Tab)
            );
            SetItemFilms(filtered.slice(0, 8));
        }
    }, [Tab, Films]);
    const HandleTab = () => {
        return (
            <div className="flex items-center list-none">
                <InfomationText text={"Phim "} size={"medium"} variant={"primary"} />
                <li
                    className={`mx-5 md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative 
          ${Tab === "now_showing" ? "text-[#034EA2]" : "text-blue-10"}`}
                    onClick={() => SetTab("now_showing")}
                >
                    Phim Đang Chiếu
                </li>

                <li
                    className={`md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative 
          ${Tab === "coming_soon" ? "text-[#034EA2]" : "text-blue-10"}`}
                    onClick={() => SetTab("coming_soon")}
                >
                    Phim Sắp Chiếu
                </li>

                <li
                    className={`mx-5 md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative 
          ${Tab === "IMAX" ? "text-[#034EA2]" : "text-blue-10"}`}
                    onClick={() => SetTab("IMAX")}
                >
                    Phim IMAX
                </li>

            </div>
        )
    }
    return (
        <div className="my-10">
            <HandleTab />
            <div className="w-full grid grid-cols-4 gap-4">
                {ItemFilms.map((item) => (
                    <ItemMovie key={item.id} props={item} size="large" />
                ))}

                <div className="col-span-4 flex justify-center">
                    <Link
                        to="/ViewFilm"
                        state={{ Films, currentTab: Tab }}
                        className="px-6 py-2 border-2 border-[#f5811f] text-[#f5811f] font-semibold rounded hover:bg-[#f5811f] hover:text-white transition"
                    >
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Movie_List_PageChil;