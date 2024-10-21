import { Skeleton } from "@mui/material";
import CuisineComponent from "../CuisineComponent/CuisineComponent";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useRestaurantDetails } from "../../utils/useRestaurantDetails";

const Body = () => {
    {/* Single responsibility principle */}
    const resData = useRestaurantDetails();

    return (
        <div id="body-container" className="pb-4">
            {/* Cuisines */}
            <CuisineComponent resData={resData?.[0]} />
            {/* Restaurants list */}
            <div id="restaurant-card-container" className="mx-24">
                <p className="p-4 mt-4 text-[1.6rem] font-bold">Top Restaurants</p>
                <div className="grid gap-12 grid-cols-4 m-6">
                    {!resData && (
                        <>
                            <Skeleton variant="rectangular" animation="wave" width={380} height={220} className="mx-4" />
                            <Skeleton variant="rectangular" animation="wave" width={380} height={220} className="mx-4" />
                            <Skeleton variant="rectangular" animation="wave" width={380} height={220} className="mx-4" />
                            <Skeleton variant="rectangular" animation="wave" width={380} height={220} className="mx-4" />
                        </>
                    )}
                    {resData?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant?.info.id} imageURL={restaurant?.info?.cloudinaryImageId} name={restaurant?.info?.name} rating={restaurant?.info?.avgRating} avgTime={restaurant?.info?.sla?.slaString} cuisines={restaurant?.info.cuisines} price={restaurant?.info?.costForTwo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;