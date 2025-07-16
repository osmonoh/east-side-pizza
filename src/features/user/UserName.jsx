import { useSelector } from "react-redux";

const UserName = () => {
    const userName = useSelector((store) => store.user.userName);

    return (
        <div className="hidden text-sm font-semibold sm:block">{userName}</div>
    );
};

export default UserName;
