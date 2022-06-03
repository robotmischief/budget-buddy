import './RecordItem.css';

const RecordItem = () => {
    return (
        <div className="item-container">
            <div className="category earnt"></div>
            <div className="record-data">
                <div className="amount">$125.<span>00</span></div>
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
            <div className="delete-btn"><img src="./assets/icons/trash-outline.svg" alt="" /></div>
        </div>
    );
};

export default RecordItem;