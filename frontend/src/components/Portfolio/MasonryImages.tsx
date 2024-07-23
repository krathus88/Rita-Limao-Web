type MasonryImagesProps = {
    url: string;
};

export function MasonryImages({ url }: MasonryImagesProps) {
    return (
        <figure className="masonry-item rounded">
            <img className="masonry-image" src={url} alt="portfolio item" />
        </figure>
    );
}
