import { useEffect, useState } from "react";
import { MENU_DATA_URL } from "./common";

export const useRestaurantMenu = (resId) => {
    const [restroDetails, setRestroDetails] = useState([]);
    const [menuDetails, setMenuDetails] = useState([]);

    const fetchMenuDetails = async (resId) => {
        try {
            const response = await fetch(MENU_DATA_URL + resId);
            if (!response.ok) {
                throw new Error("Network response is not ok");
            }
            const data = await response.json();
            setRestroDetails(data?.data?.cards[2]?.card.card.info);
            setMenuDetails(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        } catch (error) {
            console.error(error);
        }
        
    }

    useEffect(() => {
        fetchMenuDetails(resId);
    }, []);

    return [restroDetails, menuDetails];
}