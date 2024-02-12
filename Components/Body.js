import RestaurantCard,{PromotedRestaurant, PromotedRestaurant} from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const PromoRes=PromotedRestaurant(RestaurantCard);
  console.log("SUHAS");
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      console.log(resData);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
    const onlinestatus=useOnlineStatus();

    if(onlinestatus===false){

      return <h1 className="OfflineH1">
         OOPS I THINK YOU ARE OFFLINE 
      </h1>
    }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex justify-center items-center m-7 p-8">


        <input
          
          className=" flex placeholder-gray-500 border-2 border-stone-950 rounded-md w-[750px] h-[40px] m-6 text-start p-2 outline-8  "
      
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="bg-orange-700 hover:bg-yellow-600 text-white font-extrabold py-2 px-4 rounded-full w-[120px] m-2 text-[20px] "
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex  flex-wrap">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"restaurants/"+restaurant.info.id}>

              
              {restaurant?.info?.aggregatedDiscountInfoV3.discountTag==="FLAT DEAL" ? <PromoRes key={restaurant?.info?.id} {...restaurant?.info}/>
              
              :
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
              
              }
              
              
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;


 