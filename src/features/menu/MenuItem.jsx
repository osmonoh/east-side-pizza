const MenuItem = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const handleAddToCart = () => {};

    return (
        <li>
            <img src={imageUrl} alt={name} />
            <div>
                <p>{name}</p>
                <p>{ingredients.join(", ")}</p>
                <div>
                    {!soldOut ? <p>{unitPrice}</p> : <p>Sold out</p>}

                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
