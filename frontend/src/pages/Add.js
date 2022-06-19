import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import AmountCard from '../components/AmountCard';
import DetailsCard from '../components/DetailsCard';


const Add = () => {

    const { newRecord, handleAmount, handleCategory, handleDescription, handleClear, handleAmountShortcut } = useContext(GlobalContext);
    
    useEffect(()=>handleClear(), []);

    const { category_id, description, amount } = newRecord;

    return (
        <>
            <div className="page-container">
                    <Header title='Add New Record' />
                <div className="form-container">
                    <DetailsCard
                        category = {category_id}
                        handleCategory = {handleCategory}
                        description = {description}
                        handleDescription = {handleDescription}
                    />
                    <AmountCard
                        amount = {amount}
                        handleAmount = {handleAmount}
                        handleClear = {handleClear}
                        handleAmountShortcut = {handleAmountShortcut}
                        isEditmode={false}
                    />
                </div>
            </div>
        </>
    );
};

export default Add;