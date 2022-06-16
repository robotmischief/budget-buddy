import ShortcutButton from "./ShortcutButton";
import './AmountCard.css';

const AmountCard = ({amount, handleAmount, handleClear, handleAmountShortcut}) => {

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
            <div className="clean-btn" onClick={handleClear}><img src="../assets/icons/close-outline.svg" alt="icon clear amount" /></div>
        </div>
        </>
    )
};

export default AmountCard;