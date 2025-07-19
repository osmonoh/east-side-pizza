import { useNavigate, useRouteError } from "react-router-dom";
import ButtonCustom from "./interactive/ButtonCustom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const error = useRouteError();
    console.log(error);

    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                Page not found 😢
            </h1>
            <ButtonCustom
                type="primary"
                variant="big"
                onClick={() => navigate(-1)}
            >
                <span className="align-[2px]">&larr;</span> Go back
            </ButtonCustom>
        </div>
    );
};

export default ErrorPage;
