import './RecordItem.css';
import { splitAmountByComma, formatDate, getCategoryLabel } from '../utils';

const RecordItem = ({recordData}) => {
    const {
        record_id,
        created_at,
        user_id,
        type_id,
        amount,
        category_id,
        description
    } = recordData;

    const type = (type_id === 1) ? 'earnt' : 'spent';
    const amountSplited = splitAmountByComma(amount);
    const dateFormated = formatDate(created_at);
    const category = getCategoryLabel(category_id);

    return (
        <div className="item-container" onClick={()=>alert(`edit record #${record_id}`)}>
            <div className={`category  ${type}`}></div>
            <div className="record-data">
                <div className={`amount ${type}`}><span>$</span>{amountSplited[0]}.<span>{amountSplited[1]}</span>
                <div className="description"><p>{description}</p></div>
                </div>
                <div className="record-details">
                    <div className="date">
                        <img src="./assets/icons/calendar-outline.svg" alt="icon calendar" />
                        {dateFormated}
                    </div>
                    <div className="label">
                        <img src="./assets/icons/pricetags-outline.svg" alt="icon record categoty" />
                        {category}
                    </div>
                </div>
            </div>
            <div className="item-btn" onClick={()=>alert(`delete record #${record_id}`)}><img src="./assets/icons/trash-outline.svg" alt="" /></div>
        </div>
    );
};

export default RecordItem;