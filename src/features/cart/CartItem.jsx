import { formatCurrency } from "../../utils/helpers";
import ButtonRemove from "../../ui/interactive/ButtonRemove";
import QuantityControls from "../../ui/interactive/QuantityControls";

const CartItem = ({ item }) => {
    const { pizzaId, name, quantity, totalPrice } = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>

                <QuantityControls pizzaId={pizzaId}>
                    {quantity}
                </QuantityControls>

                <ButtonRemove pizzaId={pizzaId} />
            </div>
        </li>
    );
};

export default CartItem;
