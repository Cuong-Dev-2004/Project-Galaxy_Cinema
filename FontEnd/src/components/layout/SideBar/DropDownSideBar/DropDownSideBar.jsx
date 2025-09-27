import { useState } from "react";
import { FaChevronUp } from "../../../../assets/Icon/index";
import Tippy from "@tippyjs/react";

function DropDownSideBar({ Data, title, size = "small" }) {
    const [open, setOpen] = useState(false);
    const [valueDropdown, setValueDropdown] = useState(null);

    const handleSelect = (item) => {
        setValueDropdown(item);
        setOpen(false);
    };

    return (
        <div className={size === "xl" ? "w-[220px]" : "w-[450px]"}>
            <Tippy
                visible={open}
                interactive={true}
                placement="bottom-start"
                appendTo={() => document.body}
                onClickOutside={() => setOpen(false)}
                popperOptions={{
                    modifiers: [
                        {
                            name: "flip",
                            options: { fallbackPlacements: [] },
                        },
                    ],
                }}
                content={
                    <div className="inline-block min-w-full w-auto bg-white rounded-md shadow-md max-h-[250px] overflow-auto">
                        {Data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleSelect(item)}
                                className={`px-4 py-2 cursor-pointer hover:bg-indigo-100 whitespace-nowrap ${size === "xl" ? "w-[220px]" : ""}`}

                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                }
            >
                <button
                    onClick={() => setOpen(!open)}
                    className="h-[56px] border-0 outline-none focus:outline-none focus:ring-0 items-center inline-flex w-full justify-between bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-50"
                >
                    <span className="truncate whitespace-nowrap">
                        {valueDropdown ? valueDropdown.name : title}
                    </span>
                    <FaChevronUp
                        aria-hidden="true"
                        className={`size-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </Tippy>
        </div>
    );
}

export default DropDownSideBar;
