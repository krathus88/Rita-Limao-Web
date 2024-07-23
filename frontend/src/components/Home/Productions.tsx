import { useRef, useEffect } from "react";
import { Card } from "./Card";
import type { CardsDataType } from "@type/homepageTypes";

type ProductionsProps = {
    cardData: CardsDataType[];
};

export function Productions({ cardData }: ProductionsProps) {
    const slider = useRef<HTMLDivElement | null>(null);
    const isDown = useRef<boolean>(false);
    const startX = useRef<number>(0);
    const scrollLeft = useRef<number>(0);

    useEffect(() => {
        const sliderCurrent = slider.current;

        const onMouseDown = (e: MouseEvent) => {
            if (sliderCurrent) {
                isDown.current = true;
                startX.current = e.pageX - sliderCurrent.offsetLeft;
                scrollLeft.current = sliderCurrent.scrollLeft;
            }
        };

        const onMouseUp = () => {
            isDown.current = false;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown.current || !sliderCurrent) return;
            e.preventDefault();
            const x = e.pageX - sliderCurrent.offsetLeft;
            const walk = x - startX.current;
            sliderCurrent.scrollLeft = scrollLeft.current - walk;
        };

        const onMouseLeave = () => {
            isDown.current = false;
        };

        if (sliderCurrent) {
            // Add event listeners to the slider element
            sliderCurrent.addEventListener("mousedown", onMouseDown);

            // Add event listeners to the window object
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseleave", onMouseLeave);

            // Cleanup event listeners
            return () => {
                if (sliderCurrent) {
                    sliderCurrent.removeEventListener("mousedown", onMouseDown);
                }
                window.removeEventListener("mouseup", onMouseUp);
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseleave", onMouseLeave);
            };
        }
    }, []);

    return (
        <div className="mt-5 mb-3" id="Productions">
            <div className="card-wrapper" ref={slider}>
                {cardData.map((item: CardsDataType, index: number) => (
                    <Card
                        key={index}
                        title={item.title}
                        subTitle={item.subtitle}
                        description={item.description}
                        imgSource={item.image_source}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    );
}
