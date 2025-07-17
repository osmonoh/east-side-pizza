import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserName from "../features/user/UserName";

const Header = () => {
    const userName = useSelector((store) => store.user.userName);

    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
            <Link to="/" className="font-sans tracking-widest">
                East Side Pizza Co.
            </Link>

            <div>SEARCH</div>

            {userName && <UserName />}
        </header>
    );
};

export default Header;
