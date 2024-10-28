import { useEffect, useState } from "react";

export const useCuisineDetails = (collectionId, tag) => {
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1063413&lng=72.8670558&collection=" + collectionId + "&tags=" + tag + "&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    const [resList, setResList] = useState([]);

    const fetchResList = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("Network response is not ok");
            }
            const data = await response.json();
            setResList(data?.data?.cards);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchResList();
    }, []);

    return resList;
}