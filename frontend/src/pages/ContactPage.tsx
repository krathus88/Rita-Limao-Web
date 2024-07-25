import { Contact } from "@components/Contact/Contact";
import "@components/Contact/Contact.css";

export function Component() {
    return (
        <main className="my-5">
            <Contact />
        </main>
    );
}

Component.displayName = "ContactPage";
