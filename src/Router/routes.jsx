import MainLayout from "../layouts/MainLayout";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <h1>Home page</h1>,
            },
        ],
    },
];

export default routes;
