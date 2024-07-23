import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@components/Common/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                lazy: () => import("@pages/HomePage"),
            },
            {
                path: "/portfolio",
                lazy: () => import("@pages/PortfolioPage"),
            },
            {
                path: "/blog",
                lazy: () => import("@pages/BlogPage"),
            },
            {
                path: "/about",
                lazy: () => import("@pages/AboutPage"),
            },
            {
                path: "/contact",
                lazy: () => import("@pages/ContactPage"),
            },
        ],
    },
]);

export function App() {
    return (
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    );
}
