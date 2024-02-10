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
}) => {



  const onlinestatus=useOnlineStatus();

  if(onlinestatus===false){

    return <h1 className="OfflineH1">
       OOPS I THINK YOU ARE OFFLINE 
    </h1>
  }
  return (
    <div className=" m-[50px] w-[270px] p-[10px] max-w-sm rounded-md overflow-hidden shadow-2xl  border-black    ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
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
  );
};

export default RestaurantCard;