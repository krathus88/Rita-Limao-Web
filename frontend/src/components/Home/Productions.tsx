import { useRef, useEffect } from "react";
import { Card } from "./Card";
import type { CardsDataType } from "@type/homepageTypes";

type ProductionsProps = {
    cardData: CardsDataType[];
};

export function Productions({ cardData }: ProductionsProps) {
    function useHorizontalScroll() {
        const elRef = useRef<HTMLDivElement>(null);
        const isDownRef = useRef(false);
        const startXRef = useRef(0);
        const scrollLeftRef = useRef(0);
        const mouseMoveSpeedRef = useRef(0);
        const momentumIntervalRef = useRef<number | null>(null);

        useEffect(() => {
            const el = elRef.current;

            const onMouseDown = (e: MouseEvent) => {
                isDownRef.current = true;
                el?.classList.add("active");
                startXRef.current = e.pageX - (el?.offsetLeft ?? 0);
                scrollLeftRef.current = el?.scrollLeft ?? 0;
                clearInterval(momentumIntervalRef.current as number);
            };

            const onMouseLeave = () => {
                isDownRef.current = false;
                el?.classList.remove("active");
            };

            const onMouseUp = () => {
                isDownRef.current = false;
                el?.classList.remove("active");
                startMomentumScroll();
            };

            const onMouseMove = (e: MouseEvent) => {
                if (!isDownRef.current) return;
                e.preventDefault();
                const x = e.pageX - (el?.offsetLeft ?? 0);
                const walk = (x - startXRef.current) * 0.3; // Adjust the multiplier to control speed
                mouseMoveSpeedRef.current = walk;
                el!.scrollLeft = scrollLeftRef.current - walk;
            };

            const startMomentumScroll = () => {
                clearInterval(momentumIntervalRef.current as number);
                momentumIntervalRef.current = window.setInterval(() => {
                    if (Math.abs(mouseMoveSpeedRef.current) < 0.1) {
                        clearInterval(momentumIntervalRef.current as number);
                        return;
                    }
                    el!.scrollLeft -= mouseMoveSpeedRef.current;
                    mouseMoveSpeedRef.current *= 0.9; // Reduce speed gradually
                }, 16) as unknown as number;
            };

            if (el) {
                el.addEventListener("mousedown", onMouseDown);
                el.addEventListener("mouseleave", onMouseLeave);
                el.addEventListener("mouseup", onMouseUp);
                el.addEventListener("mousemove", onMouseMove);
            }

            return () => {
                if (el) {
                    el.removeEventListener("mousedown", onMouseDown);
                    el.removeEventListener("mouseleave", onMouseLeave);
                    el.removeEventListener("mouseup", onMouseUp);
                    el.removeEventListener("mousemove", onMouseMove);
                }
                clearInterval(momentumIntervalRef.current as number);
            };
        }, []);

        return elRef;
    }

    const scrollRef = useHorizontalScroll();

    return (
        <div className="mt-5 mb-3" id="Productions">
            <div className="scroll-container" ref={scrollRef}>
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
