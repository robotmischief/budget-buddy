import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import AmountCard from '../components/AmountCard';

const Add = () => {
    return (
        <>
        <div className="page-container">
                <Header title='Add New Record' />
            <div className="form-container">
                <CategoryCard />
                <AmountCard />
            </div>
        </div>
        </>
    );
};

export default Add;