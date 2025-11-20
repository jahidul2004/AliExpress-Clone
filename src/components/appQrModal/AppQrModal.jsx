import React from "react";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function AppQrModal() {
    return (
        <div>
            <dialog id="app_qr_modal" className="modal">
                <div className="modal-box relative">
                    <div className="flex justify-between gap-2">
                        <img
                            className="w-28 h-28"
                            src="https://ae-pic-a1.aliexpress-media.com/kf/S4c4cf3670c1f4dc68d48c2003ec2a26cP/3700x3700.png"
                            alt=""
                        />
                        <div>
                            <div>
                                <h1 className="text-[22px] font-bold">
                                    Download the AliExpress app
                                </h1>
                                <p className="font-semibold text-gray-600">
                                    Scan the QR code to download
                                </p>
                            </div>
                            <div className="mt-3 grid grid-cols-2 gap-2">
                                <Link
                                    target="_blank"
                                    to={
                                        "https://apps.apple.com/us/app/aliexpress-shopping-app/id436672029"
                                    }
                                    className="w-full btn bg-black text-white rounded-full shadow-none border-none outline-none"
                                >
                                    <BsApple className="text-white" /> App Store
                                </Link>
                                <Link
                                    target="_blank"
                                    to={
                                        "https://play.google.com/store/apps/details?spm=a2g0o.home.0.0.650c6278nSzzdB&id=com.alibaba.aliexpresshd"
                                    }
                                    className="w-full btn bg-black text-white rounded-full shadow-none border-none outline-none"
                                >
                                    <FaGooglePlay className="text-white" />
                                    Google Play
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="w-8 h-8 absolute top-1 right-1">
                                <IoMdClose size={32} className="text-error" />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default AppQrModal;
