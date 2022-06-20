import ShortcutButton from "./ShortcutButton";
import './AmountCard.css';

const AmountCard = ({isEditmode, amount, handleAmount, handleClear, handleAmountShortcut, handleRecordUpdate, recordId}) => {
    return (
        <>
        <div className="amount-container">
            <div className="title">Amount</div>
            <input type="number" value={amount} onChange={handleAmount} />
            <div className="shortcuts-container">
                <div className="subtitle">Shortcuts</div>
                <div className="btns-container">
                    <ShortcutButton amountBTN={5} onHandleClick={handleAmountShortcut} />
                    <ShortcutButton amountBTN={25} onHandleClick={handleAmountShortcut} />
                    <ShortcutButton amountBTN={100} onHandleClick={handleAmountShortcut} />
                </div>
            </div>
            {/* the next button shown depends if this component is used for editing or creating a record */}
            {!isEditmode
            ? (<div className="clean-btn" onClick={handleClear}><img className='icon' src="../assets/icons/trash-outline.svg" alt="icon clear amount" /></div>)
            : (<div className="edit-btn" onClick={handleRecordUpdate}><img className='icon' src="../assets/icons/create-outline.svg" alt="icon edit amount" /></div>)
            }
        </div>
        </>
    )
};

export default AmountCard;