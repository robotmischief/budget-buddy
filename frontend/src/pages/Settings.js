import Header from '../components/Header';
import AvatarCard from '../components/AvatarCard';
import LogoutButton from '../components/LogoutButton';

// TODO: implement nice to have features
const Settings = () => {
    return (
        <>
        <div className="page-container">
            <Header title={'Settings'} />
            <AvatarCard />
        </div>
        </>
    );
};

export default Settings;