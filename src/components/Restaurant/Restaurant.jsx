import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import MenuCard from './MenuCard';
import { useRestaurantMenu } from '../../utils/useRestaurantMenu';
import { useParams, Link } from 'react-router-dom';

const Restaurant = () => {
    const { resId } = useParams();
    const [restroDetails, menuDetails] = useRestaurantMenu(resId);
    const filteredMenuDetails = menuDetails.filter(menu => {
        return menu.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    const [showMenuIndex, setShowMenuIndex] = useState(0);

    const updateMenuIndex = (index) => {
        if (index !== showMenuIndex) {
            setShowMenuIndex(index);
        } else {
            setShowMenuIndex(null);
        }
    }

    return restroDetails.length !== 0 && menuDetails.length !== 0 ? (
        <div className="w-6/12 mx-auto py-4">
            <Link to="/">
                <p className="text-gray-500 font-semibold text-md :hover:background-gray-700">Back</p>
            </Link>
            <div className="mt-4">
                <div id="restaurant-information" className="mb-6">
                    <p className="font-bold text-xl my-1">{restroDetails.name}</p>
                    <div className="justify-center my-2">
                        <StarIcon fontSize="small" color="success" className='mr-1 mb-1' />
                        <span className='font-semibold'>{restroDetails.avgRating}</span> • <span className="font-semibold">{restroDetails.costForTwoMessage}</span>
                    </div>
                    <p className='font-semibold text-gray-600'>{restroDetails.cuisines.join(", ")}</p>
                </div>
                <hr className="border-2 my-4" />
                <p className='text-center font-semibold text-gray-500 text-lg'>Menu</p>

                {/* Accordian */}
                <div>
                    {filteredMenuDetails.map((menuCard, index) => (
                        <MenuCard key={menuCard.card.card.title} title={menuCard.card.card.title} items={menuCard.card.card.itemCards} showIndex={index === showMenuIndex} updateIndex={() => { updateMenuIndex(index) }} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <h1>Please wait...</h1>
    );
}

export default Restaurant;