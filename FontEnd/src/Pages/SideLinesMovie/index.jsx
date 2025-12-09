import React, { useState } from "react";
import sideLinesMove from "../../ApiClone/sidelinesMovie/index";

function MovieList() {
    const [filter, setFilter] = useState({
        theLoai: "",
        quocGia: "",
        nam: "",
        tinhTrang: "",
    });

    const filteredMovies = sideLinesMove[0].data.filter((movie) => {
        return (
            (filter.theLoai === "" || movie.theLoai.includes(filter.theLoai)) &&
            (filter.quocGia === "" || movie.quocGia === filter.quocGia) &&
            (filter.nam === "" || movie.namSanXuat === Number(filter.nam)) &&
            (filter.tinhTrang === "" || movie.TinhTrang === filter.tinhTrang)
        );
    });

    return (
        <div className="max-w-[1200px] mx-auto mt-6 flex gap-6">
            {/* Cột bên trái */}
            <div className="flex-1">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
                    {[
                        { label: "Thể Loại", value: "theLoai", options: ["Hành Động", "Viễn Tưởng", "Hài", "Kinh Dị"] },
                        { label: "Quốc Gia", value: "quocGia", options: ["Mỹ", "Việt Nam", "Thái Lan"] },
                        { label: "Năm", value: "nam", options: ["2018", "2019", "2020"] },
                        { label: "Đang Chiếu / Sắp Chiếu", value: "tinhTrang", options: ["Đang Chiếu", "Sắp Chiếu"] },
                    ].map((filterItem) => (
                        <select
                            key={filterItem.value}
                            className="border rounded p-2 bg-white hover:border-blue-400 transition"
                            value={filter[filterItem.value]}
                            onChange={(e) =>
                                setFilter({ ...filter, [filterItem.value]: e.target.value })
                            }
                        >
                            <option value="">{filterItem.label}</option>
                            {filterItem.options.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>

                {/* Movie List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMovies.map((movie) => (
                        <div
                            key={movie.dataMovie_id}
                            className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <img
                                src={movie.picture}
                                alt={movie.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="font-bold text-lg mb-1">{movie.title}</h2>
                                <p className="text-sm text-gray-500 mb-2 line-clamp-3">{movie.description}</p>
                                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                                    <span>Quốc gia: {movie.quocGia}</span>
                                    <span>Thể loại: {movie.theLoai}</span>
                                    <span>Năm: {movie.namSanXuat}</span>
                                    <span>Lượt xem: {movie.luotXem.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar: Phim Đang Chiếu */}
            <div className="w-[300px] space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Phim Đang Chiếu</h3>
                {sideLinesMove[0].data
                    .filter((movie) => movie.TinhTrang === "Đang Chiếu")
                    .slice(0, 5)
                    .map((movie) => (
                        <div key={movie.dataMovie_id} className="flex gap-3 items-center">
                            <img
                                src={movie.picture}
                                alt={movie.title}
                                className="w-20 h-28 object-cover rounded"
                            />
                            <div>
                                <p className="font-semibold text-sm line-clamp-2">{movie.title}</p>
                                <p className="text-xs text-gray-500">{movie.namSanXuat}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MovieList;
