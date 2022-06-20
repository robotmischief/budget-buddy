import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect } from 'react';
import { calcBalanceTotal, splitAmountByComma } from '../utils';
import './BalanceCard.css';

const BalanceCard = ({compactView}) => {
    const compactStyle = (compactView) ? 'compact' : '';

    const { earntTotal, spentTotal, updateBalance } = useContext(GlobalContext);

    useEffect(() => {
        updateBalance();
      }, []);

    const { balanceTotal, grandtotalColor, opositeGrandTotalColor, graphBarPercentage } = calcBalanceTotal(earntTotal, spentTotal);
    
    return (
        <div className={`balance-container ${compactStyle}`}>
            <div className='header' >BALANCE</div>
            <div className={`balance-total ${grandtotalColor}`}><span>$</span>{splitAmountByComma(balanceTotal)[0]}.<span>{splitAmountByComma(balanceTotal)[1]}</span></div>
            <div className={`graph-larger ${grandtotalColor}`}>
                <div className={`graph-shorter ${opositeGrandTotalColor}`} style={{width: graphBarPercentage + '%'}}></div>
            </div>
            <div className="earnt-spent-container">
                <div className="earnt">
                    <div className="title">EARNT</div>
                    <div className="amount"><span>$</span>{splitAmountByComma(earntTotal)[0]}.<span>{splitAmountByComma(earntTotal)[1]}</span></div>
                </div>
                <div className="spent">
                    <div className="title">SPENT</div>
                    <div className="amount"><span>$</span>{splitAmountByComma(spentTotal)[0]}.<span>{splitAmountByComma(spentTotal)[1]}</span></div>
                </div>
            </div>
        </div>
    );
};

export default BalanceCard;