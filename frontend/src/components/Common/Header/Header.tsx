import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import { ThemeSwitch } from "./ThemeSwitch";
import { PageTab } from "./PageTab";

export function Header() {
    const location = useLocation();

    const [expanded, setExpanded] = useState(false);

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const header = document.querySelector("header");
        const imgHeader = document.getElementsByClassName("home-header")[0];
        let timeoutId: ReturnType<typeof setTimeout> | undefined;

        if (header) {
            if (isHomePage) {
                imgHeader.classList.add("enter");
                imgHeader.classList.add("show");
                header.style.minHeight = "100dvh";
            } else {
                imgHeader.classList.remove("enter");
                imgHeader.classList.remove("show");
                header.style.minHeight = "auto";
            }
        }

        return () => {
            // Clear the timeout when component unmounts or pathname changes
            clearTimeout(timeoutId);
        };
    }, [isHomePage]);

    return (
        <header>
            <div className="home-header">
                <h3 className="header-text fw-bold rounded-2">
                    Hey there, I’m a wannabe freelance filmmaker with many interests
                    trying to thrive in the industry.
                    <br />
                    <br />
                    Welcome to my page!
                </h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 240"
                    className="wave">
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,144C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <Navbar expanded={expanded} expand="md" className="mx-lg-5 mx-md-3 mx-2">
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
                    <h1 className="fw-bold">Rita Limão</h1>
                </Navbar.Brand>
                <ThemeSwitch />
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)}
                />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end text-center">
                    <ul className="navbar-nav mb-2 mb-md-0 rounded">
                        <PageTab url="/" setExpanded={setExpanded}>
                            Home
                        </PageTab>
                        <PageTab url="/portfolio" setExpanded={setExpanded}>
                            Portfolio
                        </PageTab>
                        <PageTab url="/blog" setExpanded={setExpanded}>
                            Blog
                        </PageTab>
                        <PageTab url="/about" setExpanded={setExpanded}>
                            About
                        </PageTab>
                        <PageTab url="/contact" setExpanded={setExpanded}>
                            Contact Me
                        </PageTab>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
