import CategoryCard from "./CategoryCard";
import DescriptionCard from "./DescriptionCard";
import './DetailsCard.css';

const DetailsCard = ({category, description, handleDescription, handleCategory}) => {
    return (
        <>
            <div className="details-container">
                <CategoryCard category = {category} handleCategory={handleCategory} />
                <DescriptionCard 
                    description = {description} 
                    handleDescription={handleDescription} 
                    handleCategory = {handleCategory}
                />
            </div>
        </>
    )
};

export default DetailsCard;