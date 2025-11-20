import React from "react";
import { BiError } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function SearchItemModal() {
    return (
        <div>
            <dialog id="search_item_modal" className="modal">
                <div className="modal-box relative rounded-none">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <BiError className="text-primary text-8xl" />
                        <h1 className="text-primary text-3xl mt-2 font-bold">
                            Item Not Found!
                        </h1>
                        <p>
                            Sorry, we couldn't find the item you were looking
                            for.
                        </p>
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

export default SearchItemModal;
