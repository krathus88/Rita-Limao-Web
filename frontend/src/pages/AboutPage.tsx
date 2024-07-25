import { About } from "@components/About/About";
import "@components/About/About.css";

export function Component() {
    return (
        <main className="my-5">
            <About />
        </main>
    );
}

Component.displayName = "AboutPage";
