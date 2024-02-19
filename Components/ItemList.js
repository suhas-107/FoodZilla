const ItemList = ({itemcards}) => {
    return (
        <div>
            {itemcards.map(item => (
                <div key={item?.card?.info?.id}>
                    <div>
                        <h1>{item?.card?.info?.name}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
