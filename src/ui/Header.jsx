import UserName from "../features/user/UserName";

const Header = ({ customerName }) => {
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
            <div className="font-sans tracking-widest">East Side Pizza Co.</div>
            <div>SEARCH</div>
            {customerName && <UserName customerName={customerName} />}
        </header>
    );
};

export default Header;
