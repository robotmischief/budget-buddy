import CategoryCard from "./CategoryCard";
import DescriptionCard from "./DescriptionCard";
import './DetailsCard.css';

const DetailsCard = ({category, description}) => {
    return (
        <>
            <div className="details-container">
                <CategoryCard category = {category}/>
                <DescriptionCard description = {description}/>
            </div>
        </>
    )
};

export default DetailsCard;