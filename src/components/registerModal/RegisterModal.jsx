import React from "react";
import { BsApple } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoClose, IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

function RegisterModal() {
    return (
        <div>
            <dialog id="register_modal" className="modal">
                <div className="modal-box relative rounded-none">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-extrabold mb-2">
                                Register/Sign in
                            </h1>
                            <p className="flex items-center gap-2">
                                <IoShieldCheckmarkSharp className="text-success" />
                                Your information is protected
                            </p>
                        </div>
                        <form
                            className="w-full md:w-3/4 mx-auto mt-6"
                            action=""
                        >
                            <input
                                className="input input-bordered rounded-none w-full"
                                placeholder="Email"
                                type="email"
                            />
                            <button className="btn btn-primary w-full mt-4">
                                Continue
                            </button>
                        </form>
                        <p className="mt-4 text-gray-600 font-bold cursor-pointer text-sm hover:text-gray-400">
                            Trouble signing in?
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                            ------------------ Or Continue With
                            ------------------
                        </p>
                        <div className="flex items-center gap-4 md:gap-6 mt-4">
                            <FaGoogle className="text-3xl cursor-pointer" />
                            <FaFacebook className="text-3xl cursor-pointer" />
                            <BsApple className="text-3xl cursor-pointer" />
                            <RiTwitterXLine className="text-3xl cursor-pointer" />
                        </div>
                        <p className="text-xs text-gray-600 mt-4 text-center">
                            By continuing, you confirm that you are an adult and
                            have read and accepted our AliExpress Free
                            Membership Agreement and Privacy Policy. Your
                            information may be used for marketing purposes, but
                            you can opt out at any time.
                        </p>
                        <p className="text-gray-600 text-xs mt-4 font-bold">
                            <u>Why choose a location?</u>
                        </p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="absolute top-1 right-1 btn rounded-full bg-transparent border-none outline-none shadow-none">
                                <IoClose className="text-2xl" />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default RegisterModal;
