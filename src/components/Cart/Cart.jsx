import { useSelector } from "react-redux";
import { FOOD_ITEM_IMG_URL } from "../../utils/common";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    return cartItems.length !== 0 ? (
        <div className="w-6/12 mx-auto h-screen py-8">
            <span className="text-2xl font-bold">Cart</span>
            <hr className="my-4" />

            {cartItems.map(item => (
                <>
                    <div className='my-6 mx-4 flex'>
                        <div className='w-2/12'>
                            <img src={FOOD_ITEM_IMG_URL + item.imageURL} alt="burger-menu" loading='lazy' className='h-[90px] w-[102px] object-contain' />
                        </div>
                        <div className='w-9/12 my-4'>
                            <p className='text-md font-semibold'>{item.name}</p>
                        </div>
                        <div className='w-1/12 my-4'>
                            <p className='text-md font-semibold'>Rs. {item.price / 100}</p>
                        </div>
                    </div>
                    <hr className="my-4" />
                </>
            ))}
            <span className="text-xl font-semibold float-end">Total: Rs {cartItems.reduce((prevPrice, item) => {
                return prevPrice + (item.price / 100)
            }, 0)}</span>
            
        </div>
    ) : (
        <div className="w-6/12 mx-auto h-screen py-8 text-center">
            <h1 className="text-3xl font-semibold">Your cart is empty!</h1>
            <h1 className="text-xl font-semibold text-gray-500 mt-4">You can go to home page to view more restaurants</h1>
        </div>
    );
}

export default Cart;