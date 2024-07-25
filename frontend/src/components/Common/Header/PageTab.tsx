import { Link } from "react-router-dom";

type PageTabProps = {
    url: string;
    onClickEvent: () => void;
    children: React.ReactNode;
};

export function PageTab({ url, onClickEvent, children }: PageTabProps) {
    return (
        <li className="nav-item">
            <Link className="nav-link fw-bold" to={url} onClick={onClickEvent}>
                {children}
            </Link>
        </li>
    );
}
