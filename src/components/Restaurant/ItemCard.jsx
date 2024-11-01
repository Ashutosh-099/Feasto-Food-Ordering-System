import { FOOD_ITEM_IMG_URL } from "../../utils/common";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addItemInCart } from "../../store/cartReducer";
import { Badge } from "@mui/material";

const ItemCard = (props) => {
    const { name, description, price, imageURL } = props;
    const dispatch = useDispatch();
    
    return (
        <div className='my-6 mx-4 flex items-center'>
            <div className='w-3/12'>
                <img src={FOOD_ITEM_IMG_URL + imageURL} alt="burger-menu" loading='lazy' className='h-[130px] w-[142px] object-contain' />
            </div>
            <div className='w-9/12 my-4'>
                <p className='text-md font-semibold'>{name} - Rs. {price / 100}</p>
                <p className='text-sm font-semibold text-gray-500 para-container'>{description}</p>
            </div>
            <div className="ml-2">
                <IconButton color="primary" aria-label="add to shopping cart" sx={{ color: "#00a36c" }} onClick={() => dispatch(addItemInCart({name, price, imageURL}))}>
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default ItemCard;