import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { itemsCount } from "../../store/cartReducer";
import Salad from "../../../public/assets/salad.png";

const Header = () => {
    const count = useSelector(itemsCount);        // Using `cart` name here

    return (
        <div id="header-container" className="bg-white pt-6 px-4 pb-4 h-20 flex justify-between items-center">
            {/* Logo and Brand Name*/}
            <a data-testid="logo-link" href="/">
                <div className="flex items-center">
                    <img src={Salad} alt="logo" className="h-14" />
                    <span data-testid="logo-name" className="text-2xl ml-3 font-bold knewave-regular tracking-widest">
                        Feasto
                    </span>
                </div>
            </a>
            {/* Menu */}
            <div className="flex">
                <nav role="navigation" className="flex items-center text-xl">
                    <Link to="/">
                        <span className="px-4 m-2 hover:text-[#00a36c] transition duration-150">Home</span>
                    </Link>
                    <Link to="/about-us">
                        <span className="px-4 m-2 hover:text-[#00a36c] transition duration-150">About Us</span>
                    </Link>
                    <Link to="https://ashutoshagaarwal.vercel.app/">
                        <span className="px-4 m-2 hover:text-[#00a36c] transition duration-150">Profile</span>
                    </Link>
                </nav>
                {/* Cart */}
                <Link data-testid="cart-link" to="/cart">
                    <div className="flex item-center px-4 p-2 cursor-pointer bg hover:bg-gray-300/25 active:bg-gray-300">
                        <Badge color="success" badgeContent={count}>
                            <ShoppingCartIcon sx={{ color: '#00a36c', fontSize: 36 }} />
                        </Badge>
                        <span className="m-2 text-xl">Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;