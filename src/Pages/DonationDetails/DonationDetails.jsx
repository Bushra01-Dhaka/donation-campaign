import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

const DonationDetails = () => {

    const [card, setCard] = useState({});

    const {id} = useParams();
    console.log(id)

    const cards = useLoaderData();
    console.log("Card Details", cards);

    useEffect(() => {
           const findSelectedCard = cards?.find((card) => (card.id == id));
        setCard(findSelectedCard);
        console.log("data:", findSelectedCard);
      
       
           
    }, [id,cards]);

   console.log(card);

    return (
        <div>
           <Card card={card}></Card>
          
        </div>
    );
};

export default DonationDetails;