import CardContainer from "../CardContainer/CardContainer";
import PropTypes from 'prop-types';
const Cards = ({ selectedCategory, cards }) => {

   
    console.log(cards);

    const filteredCards = selectedCategory
        ? cards.filter((card) => card.category.toLowerCase() === selectedCategory.toLowerCase())
        : cards;



    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24 px-4">
                {filteredCards.map((card) => (
                    <CardContainer card={card} key={card.id}></CardContainer>
                ))}
            </div>
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array,
    selectedCategory: PropTypes.func

}

export default Cards;