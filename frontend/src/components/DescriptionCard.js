import './DescriptionCard.css';

const DescriptionCard = ({description}) => {
    
    // const handleDescriptionChange = ({target}) => {
    //     setDescription(target.value);
    // };
    
    return (
        <>
        <div className="description-container">
            <div className="title">Description</div>
            <input type="text" value={description} onChange={}/>
        </div>
        </>
    )
}

export default DescriptionCard;