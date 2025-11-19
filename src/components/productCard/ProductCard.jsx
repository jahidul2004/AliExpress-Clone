import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import React from "react";
import { TiArrowForward } from "react-icons/ti";
import { BsFire } from "react-icons/bs";

function ProductCard({ product }) {
    return (
        <div className="relative group hover:shadow-md p-2 rounded transition duration-300 ease-in-out cursor-pointer">
            {/* Image */}
            <div className="h-60 w-full">
                <img
                    className="h-full"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div>
                <div>
                    <h3 className="font-semibold mt-2">
                        {product.totalSold >= 150 && (
                            <span className="mr-1 bg-[#fce582] text-xs font-semibold px-1 py-0.5 text-center rounded">
                                Choice
                            </span>
                        )}
                        {product.rating >= 4 && (
                            <span className="mr-1 bg-[#047cfc] text-white text-xs font-semibold px-1 py-0.5 text-center rounded">
                                Brand+
                            </span>
                        )}
                        {product.name}
                    </h3>
                </div>
                <span className="flex flex-wrap items-center gap-1">
                    <h1 className="text-lg font-extrabold">
                        <span className="text-sm">BDT</span>
                        {product.price}
                    </h1>
                    <del className="text-gray-700">BDT{product.price}</del>
                </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                <h1>
                    <Rating
                        style={{ maxWidth: 60 }}
                        value={product?.rating}
                        readOnly
                    />
                </h1>{" "}
                | <h1>{product.totalSold}+ sold</h1>
            </div>
            {product?.totalSold >= 150 ? (
                <p className="text-primary font-semibold text-xs flex items-center gap-1 mt-2">
                    <TiArrowForward />
                    Top selling on AliExpress
                </p>
            ) : null}
            <p className="text-[#aa6d49] font-semibold text-xs flex items-center gap-1 mt-2">
                <BsFire />
                New User Save up to {product.discount}% off
            </p>

            {/* Button overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 bg-[#0000003f] bg-opacity-20 rounded pointer-events-none group-hover:pointer-events-auto transition duration-400">
                <button className="btn btn-secondary">See Preview</button>
                <button className="btn btn-secondary">Similar Items</button>
            </div>
        </div>
    );
}

export default ProductCard;
