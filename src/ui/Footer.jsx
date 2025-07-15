const Footer = () => {
    return (
        <footer className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
            <div className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-6">
                <span>x pizzas</span>
                <span>$x.x</span>
            </div>
            <div>&copy; 2025 by DCH</div>
            <button className="uppercase">Open cart &rarr;</button>
        </footer>
    );
};

export default Footer;
