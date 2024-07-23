import { MasonryImages } from "./MasonryImages";
import { Masonry } from "@mui/lab";
import { Grow } from "@mui/material";

export function MasonryContainer() {
    const imageUrls = [
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
        "https://placehold.co/1200x1600",
        "https://placehold.co/600x400",
    ];

    return (
        <Masonry
            columns={{ lg: 3, sm: 2, xs: 1 }}
            spacing={1}
            defaultHeight={450}
            defaultColumns={3}
            defaultSpacing={1}>
            {imageUrls.map((url, index) => (
                <Grow in={true} timeout={1500} key={index}>
                    <div>
                        <MasonryImages url={url} />
                    </div>
                </Grow>
            ))}
        </Masonry>
    );
}
