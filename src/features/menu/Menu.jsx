import { menu } from "../../data";
import MenuItem from "./MenuItem";

const Menu = () => {
    return (
        <ul>
            {menu.map((pizza) => (
                <MenuItem key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
};

export default Menu;
