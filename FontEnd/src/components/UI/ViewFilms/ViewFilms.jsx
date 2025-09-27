import { useState } from "react";
import { Films } from "../../../ApiClone/Databases";
import InfomationText from "../inFomationText/infomationText";


function ViewFilms({ ChildMainPage = true, props = [] }) {
    const [infomationFilms, setinfomationFilms] = useState(props.filter)

    return (
        <div className="w-full grid grid-cols-4 gap-4">
            {Films.map((item) => (
                <ItemMovie key={item.id} props={item} size="large" />
            ))}
            {Films.map((item) => (
                <ItemMovie key={item.id} props={item} size="large" />
            ))}
            {ChildMainPage ? (
                <div className="col-span-4 flex justify-center">
                    <button className="px-6 py-2 border-2 border-[#f5811f] text-[#f5811f] font-semibold rounded hover:bg-[#f5811f] hover:text-white transition">
                        Xem Thêm
                    </button>
                </div>
            ) :
                (
                    <div className="">
                        <InfomationText text={"Phim "} size={"medium"} variant={"primary"} />
                        <div>
                            <span>Một mùa hè sắp đi qua, để giúp khối nghỉ hè có sự chuẩn bị chất lượng nhất cho một năm học mới, Galaxy Cinema quyết định chiêu đãi hàng loạt tác phẩm giải trí thú vị. Không những thế, một tác phẩm tri ân để chào đón ngày lễ Quốc Khánh sắp tới cũng sẽ được ra mắt.

                                Xem thêm tại: https://www.galaxycine.vn/phim-dang-chieu/</span>

                            <ul>

                            </ul>
                        </div>
                    </div>
                )
            }

            <div className="col-span-4 flex justify-center">
                <button className="px-6 py-2 border-2 border-[#f5811f] text-[#f5811f] font-semibold rounded hover:bg-[#f5811f] hover:text-white transition">
                    Xem Thêm
                </button>
            </div>
        </div>

    );
}

export default ViewFilms;