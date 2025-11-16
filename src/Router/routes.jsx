import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
];

export default routes;
