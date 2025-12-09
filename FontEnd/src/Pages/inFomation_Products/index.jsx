import { useLocation } from "react-router-dom";
import { Button, ViewNavigation } from "../../components/UI";
import { useState } from "react";

function Infomation_Products() {
    const [Count, setCount] = useState(1);
    const location = useLocation();
    const { props } = location.state || {};

    const SetCountNumber = (flag) => {
        if (flag === 0) setCount((prev) => prev + 1);
        else if (flag === 1 && Count > 1) setCount((prev) => prev - 1);
    };

    if (!props) {
        return (
            <div className="w-full max-w-[1200px] mx-auto py-10 text-center text-gray-500">
                Không tìm thấy sản phẩm.
            </div>
        );
    }

    return (
        <div className="w-full max-w-[1200px] mx-auto pb-10">

            <ViewNavigation props={props.product_name} />

            <div className="flex w-full mt-6">

                <div className="h-full flex items-center justify-center overflow-hidden bg-white">
                    <img
                        src={props.product_img}
                        alt=""
                        className="w-[480px] h-full object-contain"
                    />
                </div>

                <div className="pl-[30px] mt-2 flex-1">

                    <p className="text-3xl font-bold mb-6">
                        {props.product_name}
                    </p>

                    <p className="text-red-600 text-2xl font-semibold mb-6">
                        {props.product_price}
                    </p>

                    <div className="flex items-center mb-8">
                        <p className="mr-6 font-medium">Số Lượng:</p>

                        <div className="flex items-center">
                            <button
                                className={`px-4 py-2 border rounded-l ${Count === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
                                onClick={() => SetCountNumber(1)}
                            >
                                -
                            </button>

                            <span className="px-6 py-2 border-t border-b">
                                {Count}
                            </span>

                            <button
                                className="px-4 py-2 border rounded-r"
                                onClick={() => SetCountNumber(0)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Nút bên dưới đã FIX */}
                    <Button
                        Icon={true}
                        Button={true}
                        Title="Mua Ngay"
                        product={props}
                        quantity={Count}
                    />
                </div>
            </div>

            <div className="mt-10 pt-4">
                <h2 className="text-xl font-bold mb-4 uppercase border-l-4 border-blue-800 pl-3">
                    Mô tả sản phẩm
                </h2>

                <div className="prose max-w-none text-base leading-relaxed">
                    <p>{props.description}</p>
                    <p>{props.description_child}</p>

                    <p className="font-semibold mt-4">Thông tin sản phẩm:</p>

                    <ul className="list-disc ml-5">
                        {props.introduce_produce.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h4 className="mt-5 font-semibold">
                        {props.Condition[0].Condition_title}
                    </h4>

                    <ul className="list-disc ml-5">
                        {props.Condition[0].Condition_TERMS.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Infomation_Products;
