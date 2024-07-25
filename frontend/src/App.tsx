import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@components/Common/Layout";

const HomePage = lazy(() =>
    import("@pages/HomePage").then((module) => ({
        default: module.Component,
    }))
);
const PortfolioPage = lazy(() =>
    import("@pages/PortfolioPage").then((module) => ({
        default: module.Component,
    }))
);
const BlogPage = lazy(() =>
    import("@pages/BlogPage").then((module) => ({
        default: module.Component,
    }))
);
const AboutPage = lazy(() =>
    import("@pages/AboutPage").then((module) => ({
        default: module.Component,
    }))
);
const ContactPage = lazy(() =>
    import("@pages/ContactPage").then((module) => ({
        default: module.Component,
    }))
);

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />,
                loader: () =>
                    import("@pages/PortfolioPage").then((module) =>
                        module.Component.loader()
                    ),
            },
            {
                path: "/blog",
                element: <BlogPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
        ],
    },
]);

export function App() {
    return <RouterProvider router={router} />;
}
