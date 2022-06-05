import './ShortcutButton.css';

const ShortcutButton = ({amount, onHandleClick}) => {
    return (
        <>
            <button onClick={()=>onHandleClick(amount)}>+{amount}</button>
        </>
    );
};

export default ShortcutButton;