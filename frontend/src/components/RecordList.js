import './RecordList.css';
import RecordItem from './RecordItem';

const RecordList = () => {
    return (
      <div className="recordlist-container">
            <div className="header">
              <p>RECORDS HISTORY</p>
            </div>
          <div className="recorditems-container">
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
            <RecordItem />
          </div>
          <div className="footer"><img src='./assets/icons/list-outline.svg' alt='icon show all records'/><p>LIST ALL</p></div>
      </div>
    );
};

export default RecordList;