import './BalanceCard.css';

const BalanceCard = ({compactView}) => {
    const compactStyle = (compactView) ? 'compact' : '';

    return (
        <div className={`balance-container ${compactStyle}`}>
            <div className='header' >BALANCE</div>
            <div className="graph-spent">
                <div className="graph-earnt"></div>
            </div>
            <div className="earnt-spent-container">
                <div className="earnt">
                    <div className="title">EARNT</div>
                    <div className="amount"><span>$</span>125.<span>00</span></div>
                </div>
                <div className="spent">
                    <div className="title">SPENT</div>
                    <div className="amount"><span>$</span>25.<span>00</span></div>
                </div>
            </div>
        </div>
    );
};

export default BalanceCard;