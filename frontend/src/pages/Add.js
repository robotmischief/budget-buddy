import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Header from '../components/Header';
import AmountCard from '../components/AmountCard';
import DetailsCard from '../components/DetailsCard';


const Add = () => {

    const { newRecord, handleAmount, handleCategory, handleDescription, handleClear, handleAmountShortcut } = useContext(GlobalContext);

    const { category_id, description, amount } = newRecord;

    return (
        <>
            <div className="page-container">
                    <Header title='Add New Record' />
                <div className="form-container">
                    <DetailsCard
                        category = {category_id}
                        description = {description}
                        handleDescription = {handleDescription}
                        handleCategory = {handleCategory}
                    />
                    <AmountCard
                        amount = {amount}
                        handleAmount = {handleAmount}
                        handleClear = {handleClear}
                        handleAmountShortcut = {handleAmountShortcut}
                    />
                </div>
            </div>
        </>
    );
};

export default Add;