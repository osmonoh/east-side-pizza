import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/menu",
        element: <Menu />
    }
]);

const App = () => {
    return (
        <div>
            <div>East Side Pizza Co.</div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
