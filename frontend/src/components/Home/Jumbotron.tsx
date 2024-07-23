type JumbotronProps = {
    title: string;
    description: string;
    videoSource: string;
    swapOrder: boolean;
};

export function Jumbotron({
    title,
    description,
    videoSource,
    swapOrder,
}: JumbotronProps) {
    return (
        <div className="p-sm-3 px-1 pt-2 mb-4 bg-body-tertiary rounded-3 shadow-lg">
            <div className="container-fluid">
                <div
                    className={`d-flex flex-column flex-lg-row gap-4 ${
                        swapOrder ? "flex-lg-row-reverse" : ""
                    }`}>
                    <div className="col-lg-5">
                        <h1 className="display-5 fw-bold">{title}</h1>
                        <p className="fs-5 mt-3">{description}</p>
                    </div>
                    <div className="col-lg-7 px-lg-3 pb-2">
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="rounded-3"
                                src={`${videoSource}?autoplay=0`}
                                title="Showreel Youtube video"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
