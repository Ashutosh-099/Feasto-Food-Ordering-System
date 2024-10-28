import { useCuisineDetails } from "../../utils/useCuisineDetails";
import { Link, useParams } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CuisineCollection = () => {
    const { collectionId, tag, name } = useParams();
    const resList = useCuisineDetails(collectionId, tag);
    const filteredList = resList.filter(restaurant => {
        return restaurant.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    });
    
    return resList ? (
        <div id="dishes-container" className="w-9/12 mx-auto mt-4 h-screen">
            <p className="text-3xl mt-6 font-semibold">{name}</p>
            <p className="text-xl mt-4 text-gray-500">Taste these delectable classics, delectable {name.toLowerCase()} to make your day.</p>
            <div id="restaurant-card-container">
                <div className="grid gap-12 grid-cols-4 m-6">
                    {filteredList.map(restaurant => (
                        <Link to={"/restaurant/" + restaurant.card.card.info.id} key={restaurant.card.card.info.id}>
                            <RestaurantCard id={restaurant.card.card.info.id} imageURL={restaurant.card.card.info.cloudinaryImageId} name={restaurant.card.card.info.name} rating={restaurant.card.card.info.avgRating} avgTime={restaurant.card.card.info.sla.slaString} cuisines={restaurant.card.card.info.cuisines} price={restaurant.card.card.info.costForTwo} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    );
}

export default CuisineCollection;