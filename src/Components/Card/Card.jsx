import PropTypes from 'prop-types';
import swal from 'sweetalert';
const Card = ({ card }) => {
    const { id,title, image, description, price, title_color } = card;

    const handleAddToDonation = () =>
    {
        const addedDonationArray = [];
        
        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if(!donatedItems) 
        {
            addedDonationArray.push(card);
            localStorage.setItem('donations', JSON.stringify(addedDonationArray));
            swal({
                title: "Donated Successfully💚",
                text: "Congratulations! You have made someone's life brighter. Spread Love & Care💚",
                icon: "success",
                button: "Close",
                showCancelButton: false,
                confirmButtonColor: "#38a169",
            });
        }
        else
        {
            const isExist = donatedItems.find(item => (item.id === id));
            if(!isExist)
            {
                addedDonationArray.push(...donatedItems,card);
                localStorage.setItem('donations',JSON.stringify(addedDonationArray));
                swal({
                    title: "Donated Successfully💚",
                    text: "Congratulations! You have made someone's life brighter. Spread Love & Care💚",
                    icon: "success",
                    button: "Close",
                    showCancelButton: false,
                    confirmButtonColor: "#38a169",
                });
            }
            else
            {
                swal({
                    title: "Already Donated💚",
                    text: "Congratulations! You have made someone's life brighter. If you want, you can buy more smiles💚",
                    icon: "success",
                    button: "Close",
                    showCancelButton: false,
                    confirmButtonColor: "#38a169",

                });
            }
        }
    }

    return (
        <div className="container mx-auto flex justify-center mt-8">
            <div>
                <div className="flex justify-center ">
                    <img className="w-[80%] h-[70vh] object-cover" src={image} alt="" />
                </div>

                <div className="relative bottom-[95px] flex bg-gradient-to-r from-gray-900 to-transparent w-[80%] mx-auto py-2">
                    <button onClick={handleAddToDonation} style={{backgroundColor: `${title_color}`}} className="  m-4 w-[180px] h-[50px] text-white rounded">Donate ${price}</button>
                </div>

                <div className="flex justify-center  w-[80%] mx-auto ">
                    <div className="space-y-4">
                        <h2 className="relative bottom-8 text-2xl font-bold text-[#0B0B0B]">{title}</h2>
                        <p className="relative bottom-8" >{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;