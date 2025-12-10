//step3: Build restro cards
const RestroCard = (props) => {
  //restructure of props so that props.restroName not need to be used and this only javascript not react
  const { restroInfo } = props;
  const { image, name, cuisines, rating, deliveryTime, price } = restroInfo;
  return (
    <div className="restro-card">
      <div className="restro-img-container">
        <img className="restro-img" src={image}></img>
      </div>
      <div className="restro-info">
        <h3>{name}</h3>
        <h4 className="cuisines">{cuisines.join(",")}</h4>
        <div className="restro-meta">
          <span className="rating">★ {rating}</span>
          <span className="delivery-time">{deliveryTime} mins</span>
        </div>
        <h4 className="cost">{price}</h4>
      </div>
    </div>
  );
};

export default RestroCard;
