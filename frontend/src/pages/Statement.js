import { useState } from 'react';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import RecordList from '../components/RecordList';

const Statement = ({posY, windowWidth}) => {

    const topLimitForCard = 70; // scroll limit to trigger BalanceCard responsive collapse

    const [compactView, setCompactView] = useState(false);
    if (posY >= topLimitForCard && compactView === false) setCompactView(true)
    if (posY <= 10 && compactView === true) setCompactView(false) // limit to trigger back the BalanceCard collapse

    return (
        <>
            <div className="page-container">
                <Header title='Statement' />
                <BalanceCard compactView={compactView} />
                <RecordList windowWidth={windowWidth} />
            </div>
        </>
    );
};

export default Statement;