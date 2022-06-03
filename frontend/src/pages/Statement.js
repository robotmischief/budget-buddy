import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import RecordList from '../components/RecordList';

const Statement = () => {
    return (
        <>
            <div className="page-container">
                <Header title='Statement' />
                <BalanceCard />
                <RecordList />
            </div>
        </>
    );
};

export default Statement;