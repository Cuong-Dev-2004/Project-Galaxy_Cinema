import { useSelector, useDispatch } from "react-redux";
import { setTab } from "../../../features/productSlice/productSlice";
import InfomationText from "../inFomationText/infomationText";
function Tabs() {
    const dispatch = useDispatch();
    const { activeTab, Data } = useSelector((state) => state.product);
    const tabs = Data.map((item) => item.title === "Anh Trai Vượt Ngàn Chông Gai" ? "ATVNCG" : item.title) || [];
    return (
        <div className="flex text-[20px] mb-[40px]">
            <InfomationText text={"Sản Phẩm "} />
            {tabs.map((tab) => (
                <p
                    key={tab}
                    onClick={() => dispatch(setTab(tab))}
                    className={`py-2 px-2 font-semibold hover:text-[var(--color-text-secondary)] ${activeTab === tab
                        ? "text-blue-500 border-b-2 border-indigo-500"
                        : "text-[var(--color-text)]"
                        }`}
                >
                    {tab}
                </p>
            ))}
        </div>
    );
}

export default Tabs;
