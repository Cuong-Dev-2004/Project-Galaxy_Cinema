import { BannerSlider } from "../../UI";
import DropDownSideBar from "./DropDownSideBar/DropDownSideBar";

const Data = [
    { id: 1, name: "Mưa Đỏ" },
    { id: 2, name: "Làm Giàu Với Mẹ" },
    { id: 3, name: "Thanh Gươm Diệt Quỷ: Vô Hạn Thành" },
    { id: 4, name: "Shin Cậu Bé Bút Chì: Nóng Bỏng Tay!" },
    { id: 5, name: "Em Xinh Tinh Quái" },
    { id: 6, name: "Bebefinn Phim Điện Ảnh: Lạc Vào Xứ Sở Pinkfong Diệu Kỳ" },
    { id: 7, name: "Phim" },
    { id: 8, name: "Phim" },
    { id: 9, name: "Phim" },
    { id: 10, name: "Phim" },
];

const location = [
    { id: 1, name: "Galaxy Kinh Dương Vương" },
    { id: 2, name: "Galaxy Đà Nẵng" },
    { id: 3, name: "Galaxy Huế" },
    { id: 4, name: "Galaxy Hải Phòng" },
];
const date = [
    { id: 1, name: "Thứ Bảy, 06/09/2025" },
    { id: 2, name: "Thứ Hai, 06/09/2025" },
    { id: 3, name: "Thứ Tư, 06/09/2025" },
    { id: 4, name: "Thứ Bảy, 06/09/2025" },


]
function SideBar() {
    return (
        <div className="w-full">
            <BannerSlider />

            <div className="relative left-0 right-0 mx-auto flex w-[70%] justify-center ">
                <DropDownSideBar Data={Data} title="Chọn Phim" />
                <DropDownSideBar Data={location} title="Chọn Rạp" size="xl" />
                <DropDownSideBar Data={date} title="Chọn Ngày" size="xl" />
                <DropDownSideBar Data={Data} title="Chọn Suất" size="xl" />

                <div className="h-[56px] px-6 bg-[var(--secondary-color)] text-white font-semibold rounded-md shadow hover:opacity-90 transition flex items-center">
                    Mua Vé Nhanh
                </div>

            </div>
        </div>
    );
}

export default SideBar;
