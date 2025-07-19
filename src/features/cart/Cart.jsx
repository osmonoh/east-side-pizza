import { useDispatch, useSelector } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import ButtonCustom from "../../ui/interactive/ButtonCustom";
import LinkMenu from "../../ui/interactive/LinkMenu";

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(getCart);
    const userName = useSelector(getUserName);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (!cart.length) return <EmptyCart />;

    console.log(cart);
    return (
        <div className="px-4 py-3">
            <LinkMenu />

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {userName}
            </h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((pizza) => (
                    <CartItem key={pizza.pizzaId} item={pizza} />
                ))}
            </ul>

            <div className="mt-6 space-x-2 text-center">
                <ButtonCustom to="/order/new" type="primary" variant="big">
                    Order pizzas
                </ButtonCustom>

                <ButtonCustom
                    type="secondary"
                    variant="big"
                    onClick={handleClearCart}
                >
                    Clear cart
                </ButtonCustom>
            </div>
        </div>
    );
};

export default Cart;
