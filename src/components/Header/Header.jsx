import { Link } from "react-router-dom";
import CartLogo from "../../../public/assets/cart.svg";

const Header = () => {
    return (
        <div id="header-container" className="bg-white pt-6 px-4 pb-4 h-20 flex justify-between items-center">
            {/* Logo and Brand Name*/}
            <a href="/">
                <div className="flex items-center">
                    <img src="../../../public/assets/salad.png" alt="logo" className="h-14" />
                    <span className="text-2xl ml-3 font-bold knewave-regular tracking-widest">
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
                    <Link to="https://ashutosh-agarwal.vercel.app/">
                        <span className="px-4 m-2 hover:text-[#00a36c] transition duration-150">Profile</span>
                    </Link>
                </nav>
                {/* Cart */}
                <div className="flex item-center px-4 p-2 cursor-pointer bg hover:bg-gray-300/25 active:bg-gray-300">
                    <img src={CartLogo} alt="cart-logo" />
                    <span className="m-2 text-xl">Cart</span>
                </div>
            </div>
        </div>
    );
}

export default Header;