import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import './RecordList.css';
import RecordItem from './RecordItem';
import LoadSpinner from './LoadSpinner';


const RecordList = ({ windowWidth }) => {
  const { 
    isLoading,
    listFilter, 
    records, 
    getLatestRecords, 
    handleListFilterChange,
    handleRecordDelete
  } = useContext(GlobalContext);
  
  useEffect(() => {
    getLatestRecords();
  }, []);

const listToRender = (
<>
      <div className="header">
        <p>RECORD HISTORY</p>
      </div>
      <div className="recorditems-container">
      <div className="selector">
          <select value={listFilter} onChange={handleListFilterChange}>
              <option value="latest10">Latest 10</option>
              <option value="all">List All</option>
              <option value="earnt">Earnt</option>
              <option value="spent">Spent</option>
          </select>
      </div>
        {records.map((record) => (<RecordItem 
                                    key={record.record_id} 
                                    recordData={record} 
                                    handleRecordDelete={handleRecordDelete} 
                                    windowWidth={windowWidth} />
                                ))}
      </div>
      </>
  );

  return (
    <div className="recordlist-container">
      {(isLoading)
        ? <LoadSpinner />
        : listToRender
      }

    </div>
  );
};

export default RecordList;