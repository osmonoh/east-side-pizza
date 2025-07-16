import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-semibold md:text-3xl">
                Page not found 😢
            </h1>
            <button>&larr; Go back</button>
        </div>
    );
}

export default ErrorPage;
