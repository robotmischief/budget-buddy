import { useState } from "react";
import ShortcutButton from "./ShortcutButton";

import './AmountCard.css';

const AmountCard = () => {
    const [amount, setAmount] = useState(0);

    const handleAmount = ({target}) => {
        setAmount(Number(target.value));
    };

    const handleClick = (value) => {
        const newAmount = amount + value;
        setAmount(newAmount);
    };

    return (
        <>
        <div className="amount-container">
            <div className="title">Amount</div>
            <input type="number" value={amount} onChange={handleAmount} />
            <div className="shortcuts-container">
                <div className="subtitle">Shortcuts</div>
                <div className="btns-container">
                    <ShortcutButton amount={5} onHandleClick={handleClick} />
                    <ShortcutButton amount={10} onHandleClick={handleClick} />
                    <ShortcutButton amount={15} onHandleClick={handleClick} />
                    <ShortcutButton amount={25} onHandleClick={handleClick} />
                    <ShortcutButton amount={50} onHandleClick={handleClick} />
                    <ShortcutButton amount={100} onHandleClick={handleClick} />
                </div>
            </div>
            <div className="clean-btn" onClick={()=>setAmount(0)}><img src="../assets/icons/close-outline.svg" alt="icon clear amount" /></div>
        </div>
        </>
    )
};

export default AmountCard;