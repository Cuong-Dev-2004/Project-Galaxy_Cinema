import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemProducts, ViewNavigation } from "../../components/UI";
import products from "../../ApiClone/ProductsCinemas/index";

function ViewProducts() {

    const { state } = useLocation();
    const [Products, setProducts] = useState([]);
    console.log("STATE NHẬN ĐƯỢC:", state);

    useEffect(() => {
        if (!state) return;

        if (state.index === 2) {
            setProducts(products[0].product);
        }
        else if (state.index === 3) {
            setProducts(products[1].product);
        }
    }, [state]);

    return (
        <div className="w-full max-w-[1400px] mx-auto">

            <ViewNavigation title={state?.title || ""} />

            <div className="flex flex-wrap mt-6">
                {Products.length > 0 ? (
                    Products.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                        >
                            <ItemProducts key={index} Props={item} index={index} /></div>
                    ))
                ) : (
                    <p className="text-center w-full py-10 text-gray-500">
                        Không có sản phẩm nào.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ViewProducts;
