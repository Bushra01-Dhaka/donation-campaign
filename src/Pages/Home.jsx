import { useState } from "react";
import Cards from "../Components/Cards/Cards";
import Banner from "../Components/Header/Banner/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const cards = useLoaderData();
    console.log("parent", cards);

    const handleCategorySearch = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Banner onCategorySearch={handleCategorySearch} ></Banner>
            <Cards selectedCategory={selectedCategory} cards={cards}></Cards>
        </div>
    );
};

export default Home;