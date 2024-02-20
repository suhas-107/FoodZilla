import { motion } from "framer-motion";

const ItemList = ({ itemcards }) => {
    return (
        <div className="flex flex-col ml-4">
            {itemcards.map(item => (
                <motion.div 
                    key={item?.card?.info?.id} 
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="p-4 space-x-2">
                        <h1 className="font-bold text-lg mb-2">{item?.card?.info?.name}</h1>
                        { }
                        <h2 className="text-gray-600">Price: {item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100 } /- Rs</h2>
                        <h3>"{item?.card?.info?.description}"</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default ItemList;
