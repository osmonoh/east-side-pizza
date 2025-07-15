const MenuItem = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const handleAddToCart = () => {};

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
                        <p className="text-sm">{unitPrice}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}

                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
