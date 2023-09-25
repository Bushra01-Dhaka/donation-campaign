import { useEffect, useState } from "react";
import DonationCard from "../Components/DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState('');

    const [isShowBtn, setIsShowBtn] = useState(false);

    useEffect(() => {

        const donatedItems = JSON.parse(localStorage.getItem('donations'));
        if (donatedItems) {
            setDonation(donatedItems);
        }
        else {
            setNoFound("No Donations given yet");
        }

    }, []);

    console.log(donation);

    return (
        <div className="container mx-auto">
            {noFound ? <div className="flex justify-center items-center h-[80vh]"><p className="text-2xl font-medium ">{noFound}</p></div> :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-8">
                        {
                            isShowBtn ? donation.map(card => <DonationCard key={card.id} card={card}></DonationCard>) : donation.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                            // donation.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                    </div>

                    <div className="flex justify-center my-4">
                        {
                           donation.length > 4 && <button onClick={() => setIsShowBtn(!isShowBtn)} className="bg-[#009444] hover:bg-green-500 text-white py-4 px-5 mb-4 rounded">{isShowBtn ? "See Less" : "See More"}</button>
                        }

                    </div>

                </div>
            }
        </div>
    );
};

export default Donation;