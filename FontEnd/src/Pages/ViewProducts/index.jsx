import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ItemProducts, ViewNavigation } from "../../components/UI/index";
import Tabs from "../../components/UI/Tabs/Tabs";
import { setData, setTab } from "../../features/productSlice/productSlice";

function ViewProducts() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { Props } = useSelector((state) => state.product);
    const { Data, title } = location.state || {};
    useEffect(() => {
        if (!location.state) return;
        dispatch(setData(Data));
        dispatch(setTab(title));
    }, [location.state]);


    return (
        <div className="w-full max-w-[1400px] mx-auto">
            <ViewNavigation />
            <Tabs />

            <div className="flex flex-wrap">
                {Props?.product?.map((elemt, index) => (
                    <div key={elemt.id || index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <ItemProducts Props={elemt} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewProducts;
