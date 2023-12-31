import './Banner.css'
import PropTypes from 'prop-types';
const Banner = ({ onCategorySearch }) => {

    const handleSearchClick = () => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;

        onCategorySearch(searchText);
    };



    return (
        <div className="banner-container flex justify-center items-center ">
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-center text-[#0B0B0B] mb-10'>I Grow By Helping People In Need</h1>
                <div className='flex justify-center items-center'>
                    <input id="search-field" className='p-3 md:p-5 md:w-[450px]  rounded shadow-md border-none outline-red-500' placeholder='Search here' type="text" />

                    <button onClick={handleSearchClick} className='btn btn-md md:btn-lg h-[50px] md:h-[50px]  border-none text-sm text-white  bg-[#FF444A] hover:bg-red-500 rounded'>Search</button>
                </div>

            </div>

        </div>
    );
};

Banner.propTypes = {
    onCategorySearch: PropTypes.func
}

export default Banner;