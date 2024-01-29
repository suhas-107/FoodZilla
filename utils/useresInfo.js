import { useState,useEffect } from "react";
import { MENU_API_URL } from "./Constants";


const useResInfo=(resid) =>{

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchmenu();
       },[]);


       const fetchmenu=async()=>{

        const data=await fetch(MENU_API_URL+resid);

        const json=data.json();


        setResInfo(json.data);
    
    }
      return resInfo

}
export default useResInfo;