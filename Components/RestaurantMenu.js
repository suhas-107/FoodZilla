

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER

import { useEffect ,useState } from "react";

import { useParams } from "react-router-dom";
import useResInfo from "../utils/useresInfo";

import { MENU_API_URL } from "../utils/Constants";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
      
   


    const{resid}=useParams();

    const restaurantinfo=useResInfo(resid);
   
    const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  }
  

if(restaurantinfo===null){
  return (

    <Shimmer/>
  )
}

const{name,aggregatedDiscountInfo,costForTwoMessage}=restaurantinfo?.cards[0]?.card?.card?.info;






// Creating Categories for Accordions 

const categories=restaurantinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(

  (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log(categories);




return(

     <div className=" ">

     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex justify-center text-justify space-y-9 space-x-4"> {name} 
     
     <h2 className="text-xl font-extrabold dark:text-white  flex justify-center text-justify m-[36px]  "> {aggregatedDiscountInfo.header} </h2>

     <h2 className="text-xl font-extrabold dark:text-white  flex justify-center text-justify"> {costForTwoMessage} </h2>
     </h1>

<h1 className=" font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-inherit flex justify-center text-center m-[10px]">MENU</h1>


<label className="flex justify-center items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`relative w-11 h-6 bg-gray-200 ${
          isChecked ? 'bg-green-800' : 'dark:bg-green-800'
        } rounded-full peer`}
      >
        <span
          className={`after:absolute after:content-[''] after:top-[2px] after:start-[2px] after:bg-green-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
            isChecked ? 'after:border-white' : 'dark:border-gray-600'
          } ${
            isChecked ? 'after:translate-x-full' : 'rtl:after:-translate-x-full'
          }`}
        ></span>
      </div>
      <span className="ms-3 text-sm font-extrabold text-gray-900 dark:text-gray-300">
       VEG ONLY
      </span>
    </label>
   
      
      <div className="m-[80px] flex justify-between text-center">
     
      <div className="flex flex-wrap space-y-5" >
          {/* {This is an map function to map over each accordion} */}

          {categories.map((category)=>(

            <RestaurantCategory data={category?.card?.card}/>
          ))}
      </div>
     </div>


     </div>
    //  Price: {item.card.info.defaultPrice}
)



}


export default RestaurantMenu;