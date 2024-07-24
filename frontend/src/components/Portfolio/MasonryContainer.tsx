import { useState } from "react";
import { MasonryImages } from "./MasonryImages";
import { Masonry } from "@mui/lab";
import { Grow, Dialog } from "@mui/material";

export function MasonryContainer() {
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    const handleClickOpen = (index: number) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const { clientX, currentTarget } = event;
        const { left, right } = currentTarget.getBoundingClientRect();
        const middle = (left + right) / 2;
        if (clientX >= middle) {
            handleNextImage();
        } else {
            handlePrevImage();
        }
    };

    const imageUrls: string[] = [
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
        <>
            <Masonry
                columns={{ lg: 3, sm: 2, xs: 1 }}
                spacing={1}
                defaultHeight={450}
                defaultColumns={3}
                defaultSpacing={1}>
                {imageUrls.map((url, index) => (
                    <Grow in={true} timeout={250 + index * 150} key={index}>
                        <div onClick={() => handleClickOpen(index)}>
                            <MasonryImages url={url} />
                        </div>
                    </Grow>
                ))}
            </Masonry>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <img
                    src={imageUrls[selectedImageIndex]}
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                />
            </Dialog>
        </>
    );
}
