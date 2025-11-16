import React from "react";

function ProductCard({ product }) {
    return (
        <div className="cursor-pointer">
            <div>
                <img
                    className="w-full h-[200px]"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className="p-1">
                <h1 className="my-2 font-semibold">{product.name}</h1>
                <div>
                    <h1 className="text-black text-lg font-extrabold">
                        BDT {product?.price}
                    </h1>
                    <h1>BDT {product?.price}</h1>
                </div>
                <div className="mt-2 bg bg-primary w-max text-white px-1">
                    -{product?.discount}%
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
