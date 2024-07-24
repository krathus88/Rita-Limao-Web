import axios from "axios";
import { useLoaderData, redirect } from "react-router-dom";
import { MasonryContainer } from "@components/Portfolio/MasonryContainer";
import "@components/Portfolio/Portfolio.css";
import type { PortfolioDataType } from "@type/portfolioTypes";

async function loader() {
    try {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_API;

        const response = await axios.get(`${BACKEND_URL}/portfolio/`);

        return response.data;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return redirect("/");
    }
}

export function Component() {
    const masonryDataLoader = useLoaderData() as PortfolioDataType;

    if (masonryDataLoader["portfolio_data"].length === 0)
        return (
            <div className="mt-5 mx-auto">
                <p>Woah! This is coming soon!!</p>
            </div>
        );

    return (
        <main className="container-fluid">
            <MasonryContainer masonryData={masonryDataLoader["portfolio_data"]} />
        </main>
    );
}

Component.displayName = "PortfolioPage";

Component.loader = loader;
