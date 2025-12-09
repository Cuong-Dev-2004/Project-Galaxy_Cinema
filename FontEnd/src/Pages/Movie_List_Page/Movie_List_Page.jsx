import { useLocation } from "react-router-dom";
import { ItemMovie, InfomationText } from "../../components/UI";
import { useState, useEffect } from "react";

function Movie_List_Page() {
    const location = useLocation();
    const { Films, currentTab } = location.state || {};
    { console.log(location.state) }
    const [Tab, SetTab] = useState(() => currentTab);
    const [DBFilms, setDBFilms] = useState(() => Films);
    useEffect(() => {
        if (Array.isArray(Films)) {
            const filtered = Films.filter(
                (item) => item.status === Tab || item.formats?.includes(Tab)
            );
            setDBFilms(filtered);
        }
    }, [Tab, Films]);

    const RenderInfomation_Films = () => {
        if (Tab === "coming_soon") {
            return (
                <div>
                    <p>
                        Galaxy Cinema luôn cập nhật nhanh nhất những bộ phim chiếu rạp mới
                        nhất, hấp dẫn nhất sắp ra mắt trong thời gian tới. Các bộ phim sắp
                        chiếu tại Galaxy Cinema luôn đủ mọi thể loại được ưa chuộng nhất bao
                        gồm hành động, kinh dị, phiêu lưu, hoạt hình… phù hợp cho mọi lứa
                        tuổi, đến từ Hollywood và nhiều quốc gia khác.
                    </p>
                    <p>
                        Mỗi bộ phim mới cập nhật lên website sẽ hiển thị đầy đủ thông tin từ
                        tựa phim, nội dung phim, ngày công chiếu giúp bạn thuận tiện trong
                        việc theo dõi. Ngoài ra, Galaxy Cinema sẽ luôn cập nhật và tạo thuận
                        tiện giúp bạn nhanh tay đặt lấy suất phim mới nhất, phù hợp nhất để
                        thưởng thức.
                    </p>
                </div>
            );
        } else if (Tab === "now_showing") {
            return (
                <div>
                    <p>
                        Một mùa hè sắp đi qua, để giúp khối nghỉ hè có sự chuẩn bị chất lượng
                        nhất cho một năm học mới, Galaxy Cinema quyết định chiêu đãi hàng loạt
                        tác phẩm giải trí thú vị. Không những thế, một tác phẩm tri ân để chào
                        đón ngày lễ Quốc Khánh sắp tới cũng sẽ được ra mắt.
                    </p>
                </div>
            );
        } else if (Tab === "IMAX") {
            return (
                <div>
                    <p>
                        Phim IMAX là phim điện ảnh thông thường, được xuất file định dạng
                        IMAX, với thông số kỹ thuật phù hợp với máy chiếu IMAX Laser, cho kết
                        quả hình ảnh và âm thanh chân thật nhất.
                    </p>
                    <p>
                        Phòng chiếu IMAX Laser mang đến hình ảnh hiển thị với độ phân giải lớn
                        hơn nhiều so với phim thông thường, cực kỳ phù hợp với các siêu bom tấn
                        như Avengers: Endgame, Avatar: The Way of Water, Oppenheimer,...
                    </p>
                </div>
            );
        }
        return null;
    };
    return (
        <div className="my-15">
            <div className="flex items-center list-none">
                <InfomationText text={"Phim "} size={"medium"} variant={"primary"} />
                <li
                    className={`mx-5 md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2]  cursor-pointer 
          ${Tab === "now_showing" ? "text-[#034EA2] border-b-2" : "text-blue-10"}`}
                    onClick={() => SetTab("now_showing")}
                >
                    Phim Đang Chiếu
                </li>

                <li
                    className={`mx-5 md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2]  cursor-pointer  
          ${Tab === "coming_soon" ? "text-[#034EA2] border-b-2" : "text-blue-10"}`}
                    onClick={() => SetTab("coming_soon")}
                >
                    Phim Sắp Chiếu
                </li>

                <li
                    className={`mx-5 md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal 
          hover:text-[#034EA2]  cursor-pointer  
          ${Tab === "IMAX" ? "text-[#034EA2] border-b-2" : "text-blue-10 "}`}
                    onClick={() => SetTab("IMAX")}
                >
                    Phim IMAX
                </li>

            </div>
            <div className="w-full grid grid-cols-4 gap-4">
                {DBFilms.map((item) => (
                    <ItemMovie key={item.id} props={item} size="large" />
                ))}

                <div className="col-span-4">
                    <InfomationText text={`${Tab}`} size={"medium"} variant={"primary"} />
                    <RenderInfomation_Films />
                </div>
            </div>
        </div>
    );
}

export default Movie_List_Page;
