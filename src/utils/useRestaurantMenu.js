import { useEffect, useState } from "react";
import { MENU_DATA_URL } from "./common";

export const useRestaurantMenu = (resId) => {
    const [restroDetails, setRestroDetails] = useState([]);
    const [menuDetails, setMenuDetails] = useState([]);

    const fetchMenuDetails = async (resId) => {
        const response = await fetch(MENU_DATA_URL + resId);
        const data = await response.json();
        setRestroDetails(data?.data?.cards[2]?.card.card.info);
        setMenuDetails(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    useEffect(() => {
        fetchMenuDetails(resId);
    }, []);

    return [restroDetails, menuDetails];
}