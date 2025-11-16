import React from "react";
import { IoMdMenu } from "react-icons/io";

function TopBar() {
    return (
        <div className="flex flex-wrap my-2 container mx-auto items-center gap-8">
            <div className="bg-[#f5f5f5] rounded-full flex items-center gap-2 px-4 py-2 font-semibold">
                <IoMdMenu />
                All Categories
            </div>
            <div className="hover:bg-[#f5f5f5] px-4 hover:py-2 rounded-full cursor-pointer">
                <h1 className="font-semibold text-primary">Super Deals</h1>
            </div>
            <div className="hover:bg-[#f5f5f5] px-4 hover:py-2 rounded-full cursor-pointer">
                <h1>AliExpress Business</h1>
            </div>
            <div className="hover:bg-[#f5f5f5] px-4 hover:py-2 rounded-full cursor-pointer">
                <h1>How Improve and Lighting</h1>
            </div>
            <div className="hover:bg-[#f5f5f5] px-4 hover:py-2 rounded-full cursor-pointer">
                <h1>Lingerie & Loungewear</h1>
            </div>
            <div className="hover:bg-[#f5f5f5] px-4 hover:py-2 rounded-full cursor-pointer">
                <h1>Woman's Clothing</h1>
            </div>
        </div>
    );
}

export default TopBar;
