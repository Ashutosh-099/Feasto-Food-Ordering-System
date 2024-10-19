import CuisineComponent from "../CuisineComponent/CuisineComponent";
import { useEffect, useState } from "react";
import { RESTAURANT_DATA_URL } from "../../utils/common";

const Body = () => {

    const [resData, setResData] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_DATA_URL);
        const resData = await response.json();
        console.log(resData["data"]["cards"]);
        setResData(resData["data"]["cards"]);
    }

    return (
        <div id="body-container">
            {/* Cuisines */}
            <CuisineComponent resData={resData?.[0]} />
            {/* Restaurants list */}
            <div id="restaurant-card-container" className="mx-24">
                <p className="p-4 mt-4 text-[1.6rem] font-bold">Top Restaurants</p>
                <div className="grid gap-20 grid-cols-4 m-6">
                    {/* {resData?.[1]?.card?.card?.gridElements?.infoWithStyles?.restaurants.map(restaurants => (

                    ))} */}
                    <div className="grid gap-3">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/9b88104a-587e-47e8-8b08-bc6d624f9b69_72605.jpg" alt="restaurant--image" className="h-64 w-full"/>
                        <div>
                        <p>Pizza Hut</p>
                        <p><span>4.2</span> • <span>30-35 mins</span></p>
                        <p>Pizza</p>
                        <p>400 for two</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;