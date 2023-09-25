const Card = ({ card }) => {
    const { title, image, description, price } = card;

    return (
        <div className="container mx-auto flex justify-center">
            <div>
                <div className="flex justify-center ">
                    <img className="w-[80%] h-[70vh] object-cover" src={image} alt="" />
                </div>

                <div className="relative bottom-[95px] flex bg-gradient-to-r from-gray-900 to-transparent w-[80%] mx-auto py-2">
                    <button className="bg-[#FF444A] m-4 w-[180px] h-[50px] text-white rounded">Donate ${price}</button>
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

export default Card;