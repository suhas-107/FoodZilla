// import { motion } from "framer-motion";

import { useState,useEffect } from "react";

const ItemList = ({ itemcards,isChecked }) => {


  const[check,setCheck]=useState(isChecked);
  
  useEffect(() => {
    // Update the state of check when isChecked prop changes
    setCheck(isChecked);
  }, [isChecked]);
    

  return (
    <div className="flex flex-col ml-4">
      {check
        ? itemcards
            .filter(item => item?.card?.info?.isVeg === 1)
            .map(filteredItem => (
              <div key={filteredItem.id} className="p-4 space-x-2">
                <h1 className="font-bold text-lg mb-2">{filteredItem?.card?.info?.name} '🟩'</h1>
                <h2 className="text-gray-600">Price: {filteredItem?.card?.info?.price ? filteredItem?.card?.info?.price / 100 : filteredItem?.card?.info?.defaultPrice / 100} /- Rs</h2>

                
                <h3>"{filteredItem?.card?.info?.description}"</h3>
              
                
              </div>
             
              
            ))
        : itemcards.map(item => (
            <div
              key={item?.card?.info?.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <div className="p-4 space-x-2">
                  <h1 className="font-bold text-lg mb-2">{item?.card?.info?.name} {item?.card?.info?.isVeg === 1 ? '🟩' : '🟥'} </h1>
                  <h2 className="text-gray-600">Price: {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100} /- Rs</h2>
                  <h3>"{item?.card?.info?.description}"</h3>
                </div>
  
                <div className="relative">
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + (item?.card?.info?.imageId || "")} alt="Image" className="w-48 h-48 object-cover rounded-md shadow-md relative bottom-5 left-10" />
                  <button className="absolute bottom-[140px] right-[100px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">
                    Add +
                  </button>
                </div>
              </div>
              
            </div>
          ))}
    </div>
  );
}

export default ItemList;
