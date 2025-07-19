import { getStyles } from "./styles";

const ButtonCustom = ({ children, type, variant, onClick }) => {
    const buttonStyles = getStyles(type, variant);

    return (
        <button className={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonCustom;
