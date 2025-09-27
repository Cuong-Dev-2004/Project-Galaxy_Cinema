import { ItemMovie } from "..";
import InfomationText from "../inFomationText/infomationText";


function Menulist({ Data, itemSize }) {
    return (
        <div className="min-h-[700px] min-w-[630px] border-2 border-[#f5f5f5] bg-white">
            <ul className="px-4">
                <InfomationText text={"Phim Đang Chiếu"} size={"small"} variant={"finally"} />
                <li>
                    <ul className="flex w-full">
                        {Data.map((film, index) => (
                            <ItemMovie props={film} size={itemSize} key={index} />
                        ))}
                    </ul>
                </li>
            </ul>

            <ul className="px-4">
                <InfomationText text={"Phim Sắp Chiếu"} size={"small"} variant={"finally"} />
                <li>
                    <ul className="flex w-full">
                        {Data.map((film, index) => (
                            <ItemMovie props={film} key={index} size={itemSize} />
                        ))}
                    </ul>
                </li>
            </ul>

            <ul className="px-4">
                <InfomationText text={"Phim IMAX"} size={"small"} variant={"finally"} />
                <li>
                    <ul className="flex w-full">
                        {Data.map((film, index) => (
                            <ItemMovie props={film} key={index} size={itemSize} />
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menulist;
