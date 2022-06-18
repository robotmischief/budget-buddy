import { useState } from 'react';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import RecordList from '../components/RecordList';

const Statement = ({posY}) => {

    const topLimitForCard = 40;

    const [compactView, setCompactView] = useState(false);
    if (posY >= topLimitForCard && compactView === false) setCompactView(true)
    if (posY <= 20 && compactView === true) setCompactView(false)

    return (
        <>
            <div className="page-container">
                <Header title='Statement' />
                <BalanceCard compactView={compactView} />
                <RecordList />
            </div>
        </>
    );
};

export default Statement;