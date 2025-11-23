import { CDN_URL } from "../utils/constants";

//step3: Build restro cards
const RestroCard = (props) => {
  //restructure of props so that props.restroName not need to be used and this only javascript not react
  const { restroInfo } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restroInfo?.info;
  return (
    <div className="restro-card">
      <div className="restro-img-container">
        <img className="restro-img" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="restro-info">
        <h3>{name}</h3>
        <h4 className="cuisines">{cuisines.join(",")}</h4>
        <div className="restro-meta">
          <span className="rating">★ {avgRating}</span>
          <span className="delivery-time">{sla.deliveryTime} mins</span>
        </div>
        <h4 className="cost">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestroCard;
