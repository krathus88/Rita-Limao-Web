import { Blog } from "@components/Blog/Blog";
import "@components/Blog/Blog.css";

export function Component() {
    return (
        <main className="my-5">
            <Blog />
        </main>
    );
}

Component.displayName = "BlogPage";
