import './BalanceCard.css';

const BalanceCard = () => {
    return (
        <div className="balance-container">
            <div className="header">BALANCE</div>
            <div className="graph-spent">
                <div className="graph-earnt"></div>
            </div>
            <div className="earnt-spent-container">
                <div className="earnt">
                    <div className="title">EARNT</div>
                    <div className="amount">$125.<span>00</span></div>
                </div>
                <div className="spent">
                    <div className="title">SPENT</div>
                    <div className="amount">$25.<span>00</span></div>
                </div>
            </div>
            <div className="footer"><img src="./assets/icons/list-outline.svg" alt="icon balance details" /><p>DETAILS</p></div>
        </div>
    );
};

export default BalanceCard;