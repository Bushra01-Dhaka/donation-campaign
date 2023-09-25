import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ card }) => {
    const { id, image, category, title, card_color, title_color, category_color,price } = card;
    return (
        <div style={{ backgroundColor: `${card_color}`, color: `${title_color}` }} className="card card-compact bg-base-100 shadow-xl rounded mb-4">
            <div className='flex flex-col md:flex-row'>
                <img className='w-full md:w-[200px] md:h-full h-[200px] mx-auto md:mx-0 ' src={image} alt="" />
                <div className='p-4'>
                    <button style={{ backgroundColor: `${category_color}` }} className="btn-extrasm p-1 rounded">{category}</button>
                    <h2 className="text-xl font-bold my-2 text-black">{title}</h2>
                    <p className='font-bold'>${price}</p>
                   <Link to={`/donationDetail/${id}`}> <button style={{ backgroundColor: `${title_color}`}} className='px-4 py-2 text-white rounded my-2'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DonationCard;