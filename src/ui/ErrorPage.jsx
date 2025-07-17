import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

const ErrorPage = () => {
    const navigate = useNavigate();

    const error = useRouteError();
    console.log(error);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                Page not found 😢
            </h1>
            <Button type="primary" size="big" onClick={() => navigate(-1)}>
                <span className="align-[2px]">&larr;</span> Go back
            </Button>
        </div>
    );
};

export default ErrorPage;
