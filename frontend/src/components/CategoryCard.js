import './CategoryCard.css';

const CategoryCard = ({ category, handleCategory }) => {

    return (
        <>
            <div className="category-container">
                <div className="title">Category</div>
                <select value={category} onChange={handleCategory} >
                    <option value="1">Salary</option>
                    <option value="2">Food</option>
                    <option value="3">Other</option>
                </select>
            </div>
        </>
    );
}

export default CategoryCard;