function InfomationText({
    text,
    size = "medium",
    variant = "primary",
    customClass = ""
}) {

    const sizeClass = {
        small: "text-[1.1rem] ",
        medium: "text-base",
        large: "text-xl py-3",
    }[size];

    const variantClass = {
        primary: "text-xl inline-block uppercase font-medium border-l-4 border-indigo-500 my-2 px-2",
        secondary: "py-2 border-l-4 border-green-600 text-green-700 hover:text-green-900",
        finally: " py-1 border-l-4 border-indigo-500 mt-[1.2rem] ml-2 pl-2 hover:text-(--secondary-color)",
        custom: "",
    }[variant];

    return (
        <p className={`${sizeClass} ${variantClass} font-semibold ${customClass}`}>
            {text}
        </p>
    );
}

export default InfomationText;
