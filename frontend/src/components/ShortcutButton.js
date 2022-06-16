import './ShortcutButton.css';

const ShortcutButton = ({amountBTN, onHandleClick}) => {
    return (
        <>
            <button onClick={()=>onHandleClick(amountBTN)}>+{amountBTN}</button>
        </>
    );
};

export default ShortcutButton;