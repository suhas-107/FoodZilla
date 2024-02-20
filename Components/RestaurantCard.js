import { IMG_CDN_URL } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo, 
  avgRatingString,
  aggregatedDiscountInfoV3
}) => {

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <h1 className="OfflineH1">
        OOPS I THINK YOU ARE OFFLINE
      </h1>
    );
  }

  return (
    <div className="restaurant-card rounded-md overflow-hidden shadow-2xl border-black transition-transform transform hover:-translate-y-1 hover:scale-105 m-[50px] w-[270px] p-[10px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <div className="p-4">
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        <span>
          <h4
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? '₹200 for two'}</h4>
        </span>
      </div>
    </div>
  );
};

// Higher Order Component
export const PromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-semibold font-sans">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;




