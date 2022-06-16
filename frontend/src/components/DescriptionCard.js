import './DescriptionCard.css';

const DescriptionCard = ({description, handleDescription}) => {
    return (
        <>
        <div className="description-container">
            <div className="title">Description</div>
            <input type="text" value={description} onChange={handleDescription} />
        </div>
        </>
    )
}

export default DescriptionCard;