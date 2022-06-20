import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import DetailsCard from '../components/DetailsCard';
import AmountCard from '../components/AmountCard';

const Edit = () => {
    // using location to redirect to home after editing is done    
    const location = useLocation();
    const { recordId } = location.state;

    // brings the data from the record to the UI so it is possible to Edit
    useEffect(()=> {
        handleInitRecord({recordId})
    },[]);

    const {
        newRecord, 
        handleAmount, 
        handleCategory, 
        handleDescription, 
        handleInitRecord, 
        handleRecordUpdate, 
        handleAmountShortcut
    } = useContext(GlobalContext);
    

    const { category_id, description, amount } = newRecord;

    return (
        <>
        <div className="page-container">
            <Header title='Edit Record' />
            <div className="form-container">
                <DetailsCard
                    category={category_id}
                    handleCategory={handleCategory}
                    description={description}
                    handleDescription={handleDescription}
                />
                <AmountCard 
                amount={amount}
                handleAmount = {handleAmount}
                isEditmode={true} 
                recordId={recordId} 
                handleRecordUpdate={handleRecordUpdate} 
                handleAmountShortcut={handleAmountShortcut}
                />
            </div>
        </div>
        </>
    )
};

export default Edit;