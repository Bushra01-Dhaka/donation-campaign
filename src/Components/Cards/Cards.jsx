import { useLoaderData } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";

const Cards = () => {

    const cards = useLoaderData();
    console.log(cards);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
                {
                    cards.map(card => <CardContainer card={card} key={card.id}></CardContainer>)
                }
            </div>
        </div>
    );
};

export default Cards;