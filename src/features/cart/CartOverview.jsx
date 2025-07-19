import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

const CartOverview = () => {
    const totalQuantity = useSelector(getTotalCartQuantity);
    const totalPrice = useSelector(getTotalCartPrice);

    return (
        <div className="flex items-center justify-between bg-stone-800 px-4 pt-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
            <div className="space-x-3 font-semibold text-stone-300 sm:space-x-4">
                <span>
                    {totalQuantity} {`pizza${totalQuantity === 1 ? "" : "s"}`}
                </span>
                <span>${totalPrice}</span>
            </div>

            <Link
                to="/cart"
                className="animate-blink transition-colors duration-300 hover:animate-none hover:text-yellow-400"
            >
                Open cart <span className="align-[2px]">&rarr;</span>
            </Link>
        </div>
    );
};

export default CartOverview;
