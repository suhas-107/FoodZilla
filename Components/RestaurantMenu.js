

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER

import { useEffect ,useState } from "react";

const RestaurantMenu=()=>{
      
    const[restaurantinfo,setrestaurantinfo]=useState(null);
 
    useEffect(()=>{

     fetchmenu();
    },[])
  


    



const fetchmenu= async ()=>{

  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.634103384495464&lng=73.81745181977749&restaurantId=769470&catalog_qa=undefined&submitAction=ENTER")

  const menudata=data.json();
  setrestaurantinfo(menudata.data);




}

return(

     <div className="menu">

     <h1> Name</h1>

     </div>
)



}


export default RestaurantMenu;