import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import ErrorPage from "./ui/ErrorPage";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
