import logo from "../assets/logo/logo.png";
import searchFocus from "../assets/icons/searchFocus.png";
import { FiSearch } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import bangladeshFlag from "../assets/icons/bangladeshFlag.png";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

function Navbar() {
    return (
        <div className="bg-base-100 py-4 sticky top-0 z-50">
            <div className="container mx-auto navbar flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-4 md:gap-12">
                        <img className="w-44" src={logo} alt="" />
                        <div className="flex items-center border p-1 rounded-full">
                            <div>
                                <input
                                    className="w-124 focus:outline-0 focus:shadow-none input rounded-full border-0"
                                    placeholder="Search for product"
                                    type="text"
                                />
                            </div>
                            <div className="flex items-center">
                                <img
                                    onClick={() => {
                                        document
                                            .getElementById(
                                                "photo_search_modal"
                                            )
                                            .showModal();
                                    }}
                                    className="w-8 h-8 mr-4"
                                    src={searchFocus}
                                    alt=""
                                />
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById("search_item_modal")
                                            .showModal();
                                    }}
                                    className="btn rounded-full bg-black text-white border-none outline-none shadow-none"
                                >
                                    <FiSearch className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex gap-4">
                        <div
                            onClick={() => {
                                document
                                    .getElementById("app_qr_modal")
                                    .showModal();
                            }}
                            className="cursor-pointer flex items-center gap-2"
                        >
                            <IoGridOutline className="text-3xl" />
                            <div className="text-xs font-semibold">
                                <p>Download the</p>
                                <p>AliExpress App</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-8" src={bangladeshFlag} alt="" />
                            <div className="text-xs">
                                <p>En/</p>
                                <p className="font-semibold">BDT</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegUser className="text-3xl" />
                            <div className="text-xs">
                                <p>Welcome</p>
                                <p className="font-semibold">
                                    Sign In/Register
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiShoppingCart className="text-3xl" />
                            <div className="text-xs">
                                <p className="text-white bg-black rounded-full text-center px-1">
                                    0
                                </p>
                                <p className="font-semibold">Cart</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
