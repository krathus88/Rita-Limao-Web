import { Link } from "react-router-dom";

type CardProps = {
    title: string;
    subTitle: string;
    description: string;
    imgSource: string;
    link: string;
};

export function Card({ title, subTitle, description, imgSource, link }: CardProps) {
    return (
        <div className="col-auto mt-0 rounded-2">
            <div className="card bg-body-tertiary shadow">
                <div className="img-container not-selectable">
                    <img
                        className="rounded-top-2"
                        src={imgSource}
                        role="img"
                        aria-label="Card Image"
                        loading="lazy"></img>
                    <div className="text-area font-ita">
                        <h1>{title}</h1>
                        <h2>{subTitle}</h2>
                    </div>
                </div>
                <div className="card-body d-flex flex-column">
                    <p className="card-text not-selectable">{description}</p>
                    <Link
                        type="button"
                        className="btn btn-lg btn-outline-secondary fw-bold no-link mx-auto mt-auto"
                        to={link}
                        style={{ width: "auto" }}>
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
