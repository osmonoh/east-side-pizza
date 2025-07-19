import LinkMenu from "../../ui/interactive/LinkMenu";

const EmptyCart = () => {
    return (
        <div className="px-4 py-3">
            <LinkMenu />

            <p className="mt-7 text-center font-semibold">
                Your cart is empty. Start adding some pizzas :)
            </p>
        </div>
    );
};

export default EmptyCart;
