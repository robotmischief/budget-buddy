import { useState } from 'react';
import './CategoryCard.css';

const CategoryCard = () => {
    const [category, setCategory] = useState('other');
    const handleCategory = ({target}) => {
        setCategory(target.value);
    };

    return (
        <>
            <div className="category-container">
                <div className="title">Category</div>
                <select value={category} onChange={handleCategory} >
                    <option value="salary">Salary</option>
                    <option value="food">Food</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </>
    );
}

export default CategoryCard;