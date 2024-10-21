import { useEffect, useState } from "react"
import { RESTAURANT_DATA_URL } from "./common";

export const useRestaurantDetails = () => {
    const [resData, setResData] = useState(undefined);

    useEffect(() => {
        fetchRestaurantData();
    }, []);
    
    const fetchRestaurantData = async () => {
        const response = await fetch(RESTAURANT_DATA_URL);
        const data = await response.json();
        setResData(data["data"]["cards"]);
    }

    return resData;
}