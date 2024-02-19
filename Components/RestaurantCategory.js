import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{

       const [isDataVisible,setDataVisible]=useState(false);


       const toggleDataVisibility=()=>{

         
        setDataVisible(!isDataVisible);


       }
    return(
       <div>
        <div className=" flex justify-around">
           
        <button className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b-4 border-solid cursor-pointer border-slate-900 text-slate-700 rounded-t-1 group text-dark-500 text-3xl"
        data-collapse-target="collapse-1" onClick={toggleDataVisibility}>

        {data.title}

        <span > {isDataVisible ?  '⬇️'  :  '⬆️'}</span>
         </button>

        </div>

        { isDataVisible ? 
        (<div>

        <ItemList itemcards={data?.itemCards}/>

       </div>
        ) :""

        }
        </div>
    )
}
export default RestaurantCategory;