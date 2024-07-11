import { Blog } from "@components/Blog/Blog";
import "@components/Blog/Blog.css";

export function Component() {
    return (
        <main>
            <Blog />
        </main>
    );
}

Component.displayName = "BlogPage";
