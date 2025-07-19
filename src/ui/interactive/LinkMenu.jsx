import { Link } from "react-router-dom";
import { getLinkStyles } from "./styles";

const LinkMenu = () => {
    const linkStyles = getLinkStyles();

    return (
        <Link to="/menu" className={linkStyles}>
            <span className="align-[2px]">&larr;</span> Back to menu
        </Link>
    );
};

export default LinkMenu;
