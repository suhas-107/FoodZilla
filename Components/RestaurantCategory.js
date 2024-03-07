import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,isChecked,isDataVisible,setShowIndex}) => {
  
    
        
    const toggleDataVisibility = () => {
        setShowIndex();
       
     
    };

    return (

        
       
        <div className="w-full">

         
            <div className="flex justify-between">
                <button
                    className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b-4 border-solid cursor-pointer border-slate-900 text-slate-700 ${isDataVisible ? 'rounded-t-none' : 'rounded-t-1'} group text-dark-500 text-3xl`}
                    data-collapse-target="collapse-1"
                    onClick={toggleDataVisibility}
                >
                    {data.title}
                    <span> {isDataVisible ? '⬆️' : '⬇️'} </span>
                </button>
            </div>

            {isDataVisible ? (
                <div className="border border-slate-900">
                    <ItemList itemcards={data?.itemCards} isChecked={isChecked} />
                </div>
            ) : null}
        </div>
       
    );
};

export default RestaurantCategory;
