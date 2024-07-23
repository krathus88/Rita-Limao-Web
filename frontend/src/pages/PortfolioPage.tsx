import { MasonryContainer } from "@components/Portfolio/MasonryContainer";
import "@components/Portfolio/Portfolio.css";

export function Component() {
    return (
        <main className="container-fluid">
            <MasonryContainer />
        </main>
    );
}

Component.displayName = "PortfolioPage";
