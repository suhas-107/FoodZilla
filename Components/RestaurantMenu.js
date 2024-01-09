

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER

import { useEffect ,useState } from "react";

import { useParams } from "react-router-dom";

import { MENU_API_URL } from "../constants";

import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
      
    const[restaurantinfo,setrestaurantinfo]=useState(null);


    const{resid}=useParams();
 
    useEffect(()=>{

     fetchmenu();
    },[])
  

const fetchmenu= async ()=>{

  const data= await fetch(MENU_API_URL+resid+"&catalog_qa=undefined&submitAction=ENTER")

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


const{itemCards}=restaurantinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

console.log(itemCards)



return(

     <div className="resinfo">

     <h1> {name}</h1>

     <h2> {aggregatedDiscountInfo.header} </h2>
     <h2> {costForTwoMessage} </h2>
      
      <div className="menu">
     <h1>MENU</h1>
      
      <ul>

        {itemCards.map((item)=> (<li key={item.card.info.id}>{item.card.info.name}  -  Price : Rs{item.card.info.defaultPrice/100}/- </li>))}
      </ul>
     </div>


     </div>
    //  Price: {item.card.info.defaultPrice}
)



}


export default RestaurantMenu;