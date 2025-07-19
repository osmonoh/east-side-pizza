import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

const UserName = () => {
    const userName = useSelector(getUserName);

    return (
        <div className="hidden text-sm font-semibold sm:block">{userName}</div>
    );
};

export default UserName;
