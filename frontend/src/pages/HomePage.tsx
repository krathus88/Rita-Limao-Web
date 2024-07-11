import { useEffect, useState, Suspense, lazy } from "react";
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
    const [loading, setLoading] = useState(true);
    const [jumbotron, setJumbotron] = useState<JumbotronDataType[]>([]);
    const [cards, setCards] = useState<CardsDataType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const BACKEND_URL = import.meta.env.VITE_BACKEND_API;

                const response = await axios.get(`${BACKEND_URL}/home`);

                if (response.data.jumbotron_data) {
                    setJumbotron(response.data.jumbotron_data);
                }

                if (response.data.cards_data) {
                    setCards(response.data.cards_data);
                }
            } catch (error) {
                console.error("Error fetching data from API:", error);
            } finally {
                setLoading(false);
            }
        };

        if (jumbotron.length === 0 && cards.length === 0) {
            fetchData();
        } else {
            setLoading(false); // If data already exists, set loading to false
        }
    }, [jumbotron, cards]);

    return (
        <main>
            <div className="container my-5">
                {loading && (jumbotron.length === 0 || cards.length === 0) ? (
                    <Loading />
                ) : (
                    <Suspense fallback={<Loading />}>
                        <>
                            {jumbotron.length > 0 && (
                                <ShowReels jumbotronData={jumbotron} />
                            )}
                            {cards.length > 0 && <Productions cardData={cards} />}
                        </>
                    </Suspense>
                )}
            </div>
        </main>
    );
}

Component.displayName = "HomePage";
