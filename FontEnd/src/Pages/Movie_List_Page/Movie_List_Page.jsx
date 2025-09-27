import { ItemMovie, InfomationText } from "../../components/UI";

function Movie_ListFilms({ Films = [], size = {} }) {
    return (
        <div>
            <div className="flex items-center ">
                <InfomationText text={"Phim "} size={"medium"} variant={"primary"} />
                <li>Phim Đang Chiếu</li>
                <li>Phim Sắp Chiếu</li>
                <li>Phim IMAX</li>
            </div>
            <div className="w-full grid grid-cols-4 gap-4">
                {Films.map((item) => (
                    <ItemMovie key={item.id} props={item} size="large" />
                ))}
                {Films.map((item) => (
                    <ItemMovie key={item.id} props={item} size="large" />
                ))}
                {size == ""} : (
                <div className="col-span-4 flex justify-center">
                    <button className="px-6 py-2 border-2 border-[#f5811f] text-[#f5811f] font-semibold rounded hover:bg-[#f5811f] hover:text-white transition">
                        Xem Thêm
                    </button>
                </div>
                ) :(
                <div>

                </div>
                )
            </div>
        </div>
    );
}

export default Movie_ListFilms;