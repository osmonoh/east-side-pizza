import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import CartOverview from "../features/cart/CartOverview";

const Footer = () => {
    const totalQuantity = useSelector(getTotalCartQuantity);

    return (
        <footer className={`bg-stone-800 text-sm text-stone-200 md:text-base`}>
            {!!totalQuantity && <CartOverview />}

            <div className="py-3 text-center text-xs md:text-sm">
                DCH <span className="align-[1px]">&copy;</span> 2025
            </div>
        </footer>
    );
};

export default Footer;
