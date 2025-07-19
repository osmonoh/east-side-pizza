import { Link } from "react-router-dom";
import { getButtonStyles } from "./styles";

const ButtonLink = ({ children, to, type, variant }) => {
    const buttonStyles = getButtonStyles(type, variant);

    return (
        <Link to={to} className={buttonStyles}>
            {children}
        </Link>
    );
};

export default ButtonLink;
