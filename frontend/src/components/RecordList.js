import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import './RecordList.css';
import RecordItem from './RecordItem';


const RecordList = () => {
  const { 
    listFilter, 
    records, 
    getLatestRecords, 
    handleListFilterChange 
  } = useContext(GlobalContext);
  
  useEffect(() => {
    getLatestRecords();
  }, []);

  return (
      <div className="recordlist-container">
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
            {records.map((record) => (<RecordItem recordData={record} />))}
          </div>
          
      </div>
    );
};

export default RecordList;