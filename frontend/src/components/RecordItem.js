import './RecordItem.css';

const RecordItem = ({type}) => {
    return (
        <div className="item-container" onClick={()=>alert('edit')}>
            <div className={`category  ${type}`}></div>
            <div className="record-data">
                <div className={`amount ${type}`}><span>$</span>125.<span>00</span></div>
                <div className="record-details">
                    <div className="date">
                        <img src="./assets/icons/calendar-outline.svg" alt="icon calendar" />
                        04/11/22
                    </div>
                    <div className="label">
                        <img src="./assets/icons/pricetags-outline.svg" alt="icon record categoty" />
                        SALARY
                    </div>
                </div>
            </div>
            <div className="item-btn" onClick={()=>alert('delete')}><img src="./assets/icons/trash-outline.svg" alt="" /></div>
        </div>
    );
};

export default RecordItem;