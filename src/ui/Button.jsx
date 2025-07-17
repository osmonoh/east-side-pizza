const Button = ({ children, type, size, onClick }) => {
    const style = {
        primary:
            "inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    };
    const variant = {
        big: " px-4 py-3 md:px-6 md:py-4",
        small: " px-4 py-2 md:px-5 md:py-2.5 text-xs"
    };

    return (
        <button className={style[type] + variant[size]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
