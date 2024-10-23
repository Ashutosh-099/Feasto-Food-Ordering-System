import StarIcon from '@mui/icons-material/Star';
import MenuCard from './MenuCard';
import { useRestaurantMenu } from '../../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';

const Restaurant = () => {
    const { resId } = useParams();
    const [restroDetails, menuDetails] = useRestaurantMenu(resId);
    const filteredMenuDetails = menuDetails.filter(menu => {
        return menu.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    return restroDetails.length !== 0 && menuDetails.length !== 0 ? (
        <div className="w-6/12 mt-4 mx-auto py-4">
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
                {filteredMenuDetails.map(menuCard => (
                    <MenuCard key={menuCard.card.card.title} title={menuCard.card.card.title} items={menuCard.card.card.itemCards} />
                ))}
            </div>
        </div>
    ) : (
        <h1>Please wait...</h1>
    );
}

export default Restaurant;