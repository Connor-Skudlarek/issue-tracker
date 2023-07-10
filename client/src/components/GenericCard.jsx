import "../styles/GenericCard.css";

function GenericCard(props) {
  const genericTitle = props.genericTitle;
  const genericDescription = props.genericDescription;
  const genericPrice = props.genericPrice;
  const genericImage = props.genericImage;
  const genericImageAlt = props.genericImageAlt;


  return (
    <div className="GenericCard">
      <div className="GenericCard-content">
        <div className="GenericCard-item">
          <h3 className="GenericCard-title">{genericTitle}</h3>
          <p className="GenericCard-description">{genericDescription}</p>
          <p className="GenericCard-price">{genericPrice}</p>
        </div>
        <div className="GenericCard-image">
          <img src={genericImage} alt={genericImageAlt} />
        </div>
      </div>
    </div>
  );
}

export default GenericCard;
