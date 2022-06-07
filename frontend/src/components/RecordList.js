import './RecordList.css';
import RecordItem from './RecordItem';

const RecordList = () => {
    return (
      <div className="recordlist-container">
            <div className="header">
              <p>RECORD HISTORY</p>
            </div>
          <div className="recorditems-container">
          <div className="selector">
              <select value='latest10'>
                  <option selected value="latest10">Latest 10</option>
                  <option value="all">List All</option>
                  <option value="earnt">Earnt</option>
                  <option value="spent">Spent</option>
              </select>
          </div>
            <RecordItem type='earnt' />
            <RecordItem type='earnt' />
            <RecordItem type='spent' />
            <RecordItem type='earnt' />
            <RecordItem type='spent' />
            <RecordItem type='earnt' />
            <RecordItem type='earnt' />
            <RecordItem type='spent' />
            <RecordItem type='spent' />
            <RecordItem type='earnt' />
          </div>
          
      </div>
    );
};

export default RecordList;