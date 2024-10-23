import { FOOD_ITEM_IMG_URL } from "../../utils/common";

const ItemCard = (props) => {
    const { name, description, price, imageURL } = props;
    return (
        <div className='my-6 mx-4 flex'>
            <div className='w-3/12'>
                <img src={FOOD_ITEM_IMG_URL + imageURL} alt="burger-menu" loading='lazy' className='h-[130px] w-[142px] object-contain' />
            </div>
            <div className='w-9/12 my-4'>
                <p className='text-md font-semibold'>{name} - Rs. {price/100}</p>
                <p className='text-sm font-semibold text-gray-500'>{description}</p>
            </div>
        </div>
    );
}

export default ItemCard;