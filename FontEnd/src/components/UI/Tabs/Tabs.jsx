// import { useSelector, useDispatch } from "react-redux";
// import { setTab } from "../../../features/productSlice/productSlice";
// import InfomationText from "../inFomationText/infomationText";

function Tabs() {
    // const dispatch = useDispatch();
    // const { activeTab } = useSelector((state) => state.product);
    // const tabs = ["ATVNCG", "GLX Merch"];

    return (
        <div className="flex text-[20px] mb-[40px]">
            {/* <InfomationText text="Sản Phẩm" />
            {tabs.map((tab) => (
                <p
                    key={tab}
                    onClick={() => dispatch(setTab(tab))}
                    className={`py-2 px-2 font-semibold cursor-pointer ${activeTab === tab
                        ? "text-blue-500 border-b-2 border-indigo-500"
                        : "text-[var(--color-text)] hover:text-[var(--color-text-secondary)]"
                        }`}
                >
                    {tab}
                </p>
            ))} */}
        </div>
    );
}

export default Tabs;
