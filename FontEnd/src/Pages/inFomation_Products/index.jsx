import { useLocation } from "react-router-dom";
import { Button, ViewNavigation } from "../../components/UI";
import { useState } from "react";

function Infomation_Products() {
    const [Count, setCount] = useState(1);
    const location = useLocation();
    const { props } = location.state || {};
    const SetCountNumber = (flag) => {
        const number = Count;
        if (flag == 0) {
            setCount(number + 1)
        }
        else if (flag == 1) {
            if (number == 1) {
                return;
            } else {
                setCount(number - 1)
            }
        }
    }
    if (!props) {
        return (
            <div className="w-full max-w-[1200px] mx-auto">
                <undefinedPage />
            </div>
        );
    }
    return (
        <div className="">
            <ViewNavigation props={props.product_name} />
            <div className="flex w-full">
                <span className="h-full flex items-center justify-center overflow-hidden bg-white relative group ">
                    <img src={props.product_img} alt="" className="w-[500px] h-full object-contain " />
                </span>
                <div className="pl-[30px] mt-2">
                    <p className="text-2xl md:text-3xl font-bold mb-8 px-3">
                        {props.product_name}
                    </p>
                    <p className="text-(--secondary-color) text-xxl md:text-2xl font-semibold  px-3 ">
                        {props.product_price}
                    </p>
                    <div className="flex my-8">
                        <p className="mr-[30px] px-3">Số Lượng</p>
                        <p>
                            <span
                                className={`px-7 py-2 border-collapse border rounded-[4px] ${Count === 1 ? "opacity-50 pointer-events-none bg-#e1dddd" : ""
                                    }`}
                                onClick={() => SetCountNumber(1)}
                            >-</span>
                            <span className="px-7 py-2 border-collapse border rounded-[4px]">{Count}</span>
                            <span className="px-7 py-2 border-collapse border rounded-[4px]" onClick={() => SetCountNumber(0)}>+</span>

                        </p>
                    </div>

                    <Button Icon={true} Button={true} Title={"Mua Ngay"} />
                </div>
            </div>
            <div className="mt-8 sm:mt-10 pt-4">
                <h2 className="text-xl font-bold mb-4 sm:mb-6 uppercase border-l-4 border-blue-800 pl-3 flex items-center">
                    Mô tả sản phẩm
                </h2>
                <div className="prose max-w-none text-base">
                    <>
                        <p>
                            {props.description}
                        </p>
                        <p>{props.description_child}</p>
                    </>
                    <p>Thông tin sản phẩm:</p>
                    <ul>
                        {props.introduce_produce.map((elmts, index) => {
                            return (
                                <li key={index}>
                                    {elmts}
                                </li>
                            );
                        })}
                    </ul>
                    <h4 className="mt-5">{props.Condition[0].Condition_title}</h4>
                    <ul className="">
                        {props.Condition[0].Condition_TERMS.map((elmts, index) => {
                            return (
                                <li key={index}>
                                    {elmts}
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Infomation_Products;