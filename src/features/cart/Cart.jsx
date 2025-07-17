import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cart = useSelector(getCart);
    const userName = useSelector(getUserName);

    console.log(cart);
    return (
        <div className="px-4 py-3">
            <Link to="/menu">&larr; Back to menu</Link>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {userName}
            </h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((pizza) => (
                    <CartItem key={pizza.pizzaId} item={pizza} />
                ))}
            </ul>
        </div>
    );
};

export default Cart;
