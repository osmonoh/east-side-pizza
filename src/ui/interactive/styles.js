export const getButtonStyles = (type = "primary", variant = "big") => {
    const baseStyles =
        "inline-block rounded-full font-semibold uppercase tracking-wide text-sm transition-colors duration-300 focus:outline-none focus:ring  focus:ring-offset-2 disabled:cursor-not-allowed";
    const typeStyles = {
        primary:
            "bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300",
        secondary:
            "border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:ring-stone-200"
    };
    // ADD STYLE FOR SECONDARY ROUND
    const variantStyles = {
        big: `px-4 md:px-6 ${type === "primary" ? "py-3 md:py-4" : "py-2.5 md:py-3.5"}`,
        small: `px-4 md:px-5 text-xs ${type === "primary" ? "py-2 md:py-2.5" : "py-1.5 md:py-2"}`,
        round: `px-2.5 py-1 md:px-3.5 md:py-2 text-sm`
    };

    return `${baseStyles} ${typeStyles[type]} ${variantStyles[variant]}`;
};

export const getLinkStyles = () => {
    return "text-sm text-blue-500 hover:text-blue-600 hover:underline";
};
