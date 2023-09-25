import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CardContainer = ({ card }) => {
    const {id,image, category, title, card_color, title_color, category_color } = card;
    return (
        <div>

        <Link to={`/donationDetail/${id}`}>

            <div style={{ backgroundColor: `${card_color}`, color: `${title_color}` }} className="card card-compact bg-base-100 shadow-xl rounded mb-4">
                <figure><img className="w-full h-[180px]" src={image} alt="Shoes" /></figure>
                <div className="p-4">
                    <button style={{ backgroundColor: `${category_color}` }} className="btn-sm rounded">{category}</button>
                    <h2 className="text-xl font-bold my-2">{title}</h2>

                </div>
            </div>

         </Link>


        </div>
    );
};

CardContainer.propTypes = {
    card: PropTypes.object.isRequired
}

export default CardContainer;