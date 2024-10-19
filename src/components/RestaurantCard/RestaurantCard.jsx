const RestaurantCard = (props) => {
    const { imageURL, name, rating, avgTime, cuisines, price } = props;

    return (
        <div className="grid gap-1 rounded-xl">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageURL} alt="restaurant--image" className="h-44 w-full rounded-xl object-cover" />
            <div className="px-2">
                <p className="font-bold text-xl my-1 text-ellipsis overflow-hidden ...">{name}</p>
                <p><span className="font-semibold">{rating}</span> • <span className="font-semibold">{avgTime}</span></p>
                <p className="text-gray-500 text-ellipsis overflow-hidden">{cuisines?.slice(0, 4).join(", ")}</p>
                <p className="text-gray-500">{price}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;