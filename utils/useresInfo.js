import { useState,useEffect } from "react";

import { MENU_API_URL } from "./Constants";


const useResInfo =(resid) => {

    const[restaurantinfo,setrestaurantinfo]=useState(null);


    useEffect(()=>{

        fetchmenu();
       },[])
     
   
   const fetchmenu= async ()=>{
   
     const data= await fetch(MENU_API_URL+resid+"&catalog_qa=undefined&submitAction=ENTER")
   
     const menudata= await data.json();
      
    
     console.log(menudata);
   
     setrestaurantinfo(menudata.data);
   
   
   
   
   }
       

   return restaurantinfo;
}

export default useResInfo;