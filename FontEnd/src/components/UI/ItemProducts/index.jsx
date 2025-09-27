import { Link } from "react-router-dom";
import { FaRegEye } from "../../../assets/Icon";
import Button from "../Button/index.jsx"

function ItemProducts({ Props, index }) {
    return (
        <div className="h-full mx-1 my-2">
            <div className="flex flex-col justify-between min-h-[520px] border border-[#f5f5f5] rounded shadow-xl">
                {/* Hình ảnh */}
                <div className="h-[300px] flex items-center justify-center overflow-hidden bg-white relative group">
                    <img
                        src={Props.product_img}
                        alt={Props.product_name}
                        className="w-full h-full object-fill"
                    />

                    {/* Hover Mua Vé */}
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
                        <p className="flex items-center text-white px-8 py-2 border border-[#f5f5f5] rounded  hover:bg-[#efebeb] hover:text-black font-semibold cursor-pointer">
                            <span className="rounded"><FaRegEye /></span>
                            <Link to={"/Infomation"} state={{ props: Props, index: index }}> <span className="pl-2">Mua Vé</span></Link>
                        </p>
                    </div>
                </div>
                <Link to={"/Infomation"} state={{ props: Props, index: index }}>

                    {/* Tên & Giá */}
                    <div className="p-3">
                        <div className="font-bold text-lg line-clamp-2">{Props.product_name}</div>
                        <div className="text-red-600 text-xl mt-1">{Props.product_price}</div>
                    </div>
                </Link>

                {/* Nút */}
                <Button Icon={true} Title={"Mua Ngay"} Button={true} />
            </div>
        </div >
    );
}

export default ItemProducts;
