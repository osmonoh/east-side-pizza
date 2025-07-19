import { useSelector } from "react-redux";
import { getUserName } from "../features/user/userSlice";
import CreateUser from "../features/user/CreateUser";
import ButtonLink from "./interactive/ButtonLink";

const Home = () => {
    const userName = useSelector(getUserName);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                <span>Wood fired pizza.</span>
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>

            {!userName ? (
                <CreateUser />
            ) : (
                <ButtonLink to="/menu" type="primary" variant="big">
                    Continue ordering, {userName}
                </ButtonLink>
            )}
        </div>
    );
};

export default Home;
