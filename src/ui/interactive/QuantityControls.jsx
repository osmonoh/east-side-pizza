import { useDispatch } from "react-redux";
import {
    decreaseItemQuantity,
    increaseItemQuantity
} from "../../features/cart/cartSlice";
import ButtonCustom from "./ButtonCustom";

const QuantityControls = ({ children, pizzaId }) => {
    const dispatch = useDispatch();

    const handleDecrease = () => {
        dispatch(decreaseItemQuantity(pizzaId));
    };
    const handleIncrease = () => {
        dispatch(increaseItemQuantity(pizzaId));
    };

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <ButtonCustom
                type="primary"
                variant="round"
                onClick={handleDecrease}
            >
                -
            </ButtonCustom>

            <span className="tesxt-sm font-medium">{children}</span>

            <ButtonCustom
                type="primary"
                variant="round"
                onClick={handleIncrease}
            >
                +
            </ButtonCustom>
        </div>
    );
};

export default QuantityControls;
