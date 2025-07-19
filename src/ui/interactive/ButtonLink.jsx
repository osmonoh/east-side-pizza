import { Link } from "react-router-dom";
import { getStyles } from "./styles";

const ButtonLink = ({ children, to, type, variant }) => {
    const buttonStyles = getStyles(type, variant);

    return (
        <Link to={to} className={buttonStyles}>
            {children}
        </Link>
    );
};

export default ButtonLink;
