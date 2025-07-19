import { menu } from "../../data";
import MenuItem from "./MenuItem";

const Menu = () => {
    // ADD REMOTE MENU FETCHING WITH LOADER

    return (
        <ul className="divide-y divide-stone-200 px-2">
            {menu.map((pizza) => (
                <MenuItem key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
};

export default Menu;
