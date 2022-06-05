import Header from '../components/Header';
import AvatarCard from '../components/AvatarCard';
import LogoutButton from '../components/LogoutButton';

const Settings = () => {
    return (
        <>
            <Header title={'Settings'} />
            <AvatarCard />
            <LogoutButton />
        </>
    );
};

export default Settings;