import { useOutletContext } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";

const Home = () => {
    const [setCustomerName] = useOutletContext();

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                <span>The best pizza.</span>
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>

            <CreateUser setCustomerName={setCustomerName} />
        </div>
    );
};

export default Home;
