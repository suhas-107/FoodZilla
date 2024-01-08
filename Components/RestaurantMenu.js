

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER

import { useEffect ,useState } from "react";

import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
      
    const[restaurantinfo,setrestaurantinfo]=useState(null);
 
    useEffect(()=>{

     fetchmenu();
    },[])
  

const fetchmenu= async ()=>{

  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER")

  const menudata= await data.json();

  console.log(menudata);
  setrestaurantinfo(menudata.data);




}

if(restaurantinfo===null){
  return (

    <Shimmer/>
  )
}

const{name,aggregatedDiscountInfo,costForTwoMessage}=restaurantinfo?.cards[0]?.card?.card?.info


return(

     <div className="resinfo">

     <h1> {name}</h1>

     <h2> {aggregatedDiscountInfo.header} </h2>
     <h2> {costForTwoMessage} </h2>
      
      <div className="menu">
     <h1>MENU</h1>
       
       <h2>


        
       </h2>
     </div>


     </div>
)



}


export default RestaurantMenu;