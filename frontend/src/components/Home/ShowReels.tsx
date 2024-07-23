import { Jumbotron } from "./Jumbotron";
import type { JumbotronDataType } from "@type/homepageTypes";

type ShowReelsProps = {
    jumbotronData: JumbotronDataType[];
};

export function ShowReels({ jumbotronData }: ShowReelsProps) {
    return (
        <div className="container my-5" id="Jumbotron">
            {jumbotronData.map((item: JumbotronDataType, index: number) => {
                // Generate swapOrder value based on index
                const swapOrder = index % 2 === 0;
                return (
                    <Jumbotron
                        key={index}
                        title={item.title}
                        description={item.description}
                        videoSource={item.video_source}
                        swapOrder={swapOrder}
                    />
                );
            })}
        </div>
    );
}
