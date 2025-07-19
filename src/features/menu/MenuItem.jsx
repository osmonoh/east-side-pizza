import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentPizzaQuantity } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import ButtonCustom from "../../ui/interactive/ButtonCustom";
import ButtonRemove from "../../ui/interactive/ButtonRemove";
import QuantityControls from "../../ui/interactive/QuantityControls";

const MenuItem = ({ pizza }) => {
    const dispatch = useDispatch();

    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const currentPizzaQuantity = useSelector(getCurrentPizzaQuantity(id));
    const isInCart = currentPizzaQuantity > 0;

    const handleAddToCart = () => {
        const pizza = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice
        };
        dispatch(addItem(pizza));
    };

    return (
        <li className="flex gap-4 py-2">
            <img
                className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
                src={imageUrl}
                alt={name}
            />
            <div className="flex flex-grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}

                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <QuantityControls pizzaId={id}>
                                {currentPizzaQuantity}
                            </QuantityControls>

                            <ButtonRemove pizzaId={id} />
                        </div>
                    )}

                    {!isInCart && !soldOut && (
                        <ButtonCustom
                            type="primary"
                            variant="small"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </ButtonCustom>
                    )}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
