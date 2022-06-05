import './AvatarCard.css';

const AvatarCard = () => {
    return (
        <>
        <div className="avatar-photo">
            <img src="../assets/icons/tempavatar.jpg" alt="photo avatar" />
            <div className="upload-btn"><img src="../assets/icons/camera-outline.svg" alt="icon upload avatar" /></div>
        </div>
        </>
    );
};

export default AvatarCard;