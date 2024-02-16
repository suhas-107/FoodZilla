const RestaurantCategory=({data})=>{


    return(

        <div className=" flex space-y-20">
           
          <button className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        data-collapse-target="collapse-1">

        {data.title}

          </button>

          
         

         
        </div>
    )
}
export default RestaurantCategory;