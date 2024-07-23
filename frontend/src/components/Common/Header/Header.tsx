import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
    const location = useLocation();

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
                timeoutId = setTimeout(() => {
                    imgHeader.classList.remove("show");
                    header.style.minHeight = "auto";
                }, 500); // Adjust the delay time
            }
        }

        return () => {
            // Clear the timeout when component unmounts or pathname changes
            clearTimeout(timeoutId);
        };
    }, [isHomePage]);

    return (
        <header className="mb-4">
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
            <nav className="navbar navbar-expand-md mx-md-5 mx-2">
                <Link className="navbar-brand" to="/">
                    <h1 className="fw-bold">Rita Limão</h1>
                </Link>
                <ThemeSwitch />
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="navbar-collapse collapse justify-content-end"
                    id="navbarCollapse">
                    <ul className="navbar-nav mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/contact">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
