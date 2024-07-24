import { useEffect, useState, useCallback, Suspense, lazy } from "react";
import axios from "axios";
import { Loading } from "@components/Common/Loading";
import "@components/Home/Home.css";
import type { JumbotronDataType, CardsDataType } from "@type/homepageTypes";

const ShowReels = lazy(() =>
    import("@components/Home/ShowReels").then((module) => ({
        default: module.ShowReels,
    }))
);

const Productions = lazy(() =>
    import("@components/Home/Productions").then((module) => ({
        default: module.Productions,
    }))
);

export function Component() {
    const [jumbotron, setJumbotron] = useState<JumbotronDataType[]>(() => {
        const savedJumbotron = localStorage.getItem("jumbotronData");
        return savedJumbotron ? JSON.parse(savedJumbotron) : [];
    });
    const [cards, setCards] = useState<CardsDataType[]>(() => {
        const savedCards = localStorage.getItem("cardsData");
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const fetchData = useCallback(async () => {
        try {
            const BACKEND_URL = import.meta.env.VITE_BACKEND_API;

            const response = await axios.get(`${BACKEND_URL}/home/`);

            if (response.data.jumbotron_data) {
                setJumbotron(response.data.jumbotron_data);
                localStorage.setItem(
                    "jumbotronData",
                    JSON.stringify(response.data.jumbotron_data)
                );
            }

            if (response.data.cards_data) {
                setCards(response.data.cards_data);
                localStorage.setItem(
                    "cardsData",
                    JSON.stringify(response.data.cards_data)
                );
            }
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }
    }, []);

    useEffect(() => {
        const savedJumbotron = localStorage.getItem("jumbotronData");
        const savedCards = localStorage.getItem("cardsData");

        if (!savedJumbotron || !savedCards) {
            fetchData();
        }
    }, [fetchData]);

    if (jumbotron.length === 0 && cards.length === 0) return <Loading />;

    return (
        <main>
            <div className="container my-5">
                <Suspense fallback={<Loading />}>
                    <>
                        {jumbotron.length > 0 && (
                            <ShowReels jumbotronData={jumbotron} />
                        )}
                        {cards.length > 0 && <Productions cardData={cards} />}
                    </>
                </Suspense>
            </div>
        </main>
    );
}

Component.displayName = "HomePage";
