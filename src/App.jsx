import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";

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
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
