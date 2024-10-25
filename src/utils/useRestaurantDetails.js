import { useEffect, useState } from "react"
import { RESTAURANT_DATA_URL } from "./common";

export const useRestaurantDetails = () => {
    const [resData, setResData] = useState(undefined);

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    const fetchRestaurantData = async () => {
        try {
            const response = await fetch(RESTAURANT_DATA_URL);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setResData(data["data"]["cards"]);
        } catch (error) {
            console.error(error);
        }

    }

    return resData;
}