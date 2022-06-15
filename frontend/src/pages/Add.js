import { useContext } from 'react';
import Header from '../components/Header';
import AmountCard from '../components/AmountCard';
import DetailsCard from '../components/DetailsCard';
import { GlobalContext } from '../context/GlobalState';

const Add = () => {
    const { category, description, amount, handleAmount } = useContext(GlobalContext);

    return (
        <>
        <div className="page-container">
                <Header title='Add New Record' />
            <div className="form-container">
                <DetailsCard categoty={category} description={description}/>
                <AmountCard amount={amount} handleAmount={handleAmount}/>
            </div>
        </div>
        </>
    );
};

export default Add;