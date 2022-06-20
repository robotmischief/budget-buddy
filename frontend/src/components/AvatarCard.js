import LogoutButton from './LogoutButton';
import './AvatarCard.css';

const AvatarCard = () => {
    return (
        <>
        <div className="form-container">
        <div className="avatar-photo">
            <img src="../assets/icons/tempavatar.jpg" alt="avatar" />
            <div className="upload-btn"><img src="../assets/icons/camera-outline.svg" alt="button upload avatar" /></div>
        </div>
        <div className="user-data-container">
            <div className="subtext">Your Screen Name</div>
            <input type="text" defaultValue='Demo' className='title'/>
        </div>
        <div className="login-container">
            <LogoutButton />
        </div>
        </div>
        </>
    );
};

export default AvatarCard;