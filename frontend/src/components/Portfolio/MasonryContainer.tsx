import { useState } from "react";
import { MasonryImages } from "./MasonryImages";
import { Masonry } from "@mui/lab";
import { Grow, Dialog } from "@mui/material";
import type { MasonryDataType } from "@type/portfolioTypes";

type MasonryContainerProps = {
    masonryData: MasonryDataType[];
};

export function MasonryContainer({ masonryData }: MasonryContainerProps) {
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
            prevIndex === masonryData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? masonryData.length - 1 : prevIndex - 1
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

    return (
        <>
            <Masonry
                columns={{ lg: 3, sm: 2, xs: 1 }}
                spacing={1}
                defaultHeight={450}
                defaultColumns={3}
                defaultSpacing={1}>
                {masonryData.map((item: MasonryDataType, index: number) => (
                    <Grow in={true} timeout={250 + index * 150} key={index}>
                        <div onClick={() => handleClickOpen(index)}>
                            <MasonryImages url={item.img_source} />
                        </div>
                    </Grow>
                ))}
            </Masonry>
            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <img
                    src={masonryData[selectedImageIndex].img_source}
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                />
            </Dialog>
        </>
    );
}
