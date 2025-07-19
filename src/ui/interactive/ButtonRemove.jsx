import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import ButtonCustom from "./ButtonCustom";

const ButtonRemove = ({ pizzaId }) => {
    const dispatch = useDispatch();

    function handleRemoveFromCart() {
        dispatch(removeItem(pizzaId));
    }

    return (
        <ButtonCustom
            type="secondary"
            variant="small"
            onClick={handleRemoveFromCart}
        >
            Remove
        </ButtonCustom>
    );
};

export default ButtonRemove;
