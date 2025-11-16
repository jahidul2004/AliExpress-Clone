import React from "react";
import vivaLogo from "../../../assets/logo/vivaLogo.webp";
import categoryWomen from "../../../assets/characters/categoryWomen.jpg";
import starIcon from "../../../assets/icons/star.png";

function ShopByCategory() {
    const products = [
        {
            id: 1,
            image: "https://i.ibb.co.com/MkMfpLrw/S690a24976a3a4c3bbe5ad389fde620f6h-jpg-480x480q75-jpg.jpg",
            name: "Smart Fitness Tracker Device",
            price: "4560.00",
            discount: "10",
            rating: 4.5,
            totalSold: 300,
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/jPKXQSS0/S625a9bf18ec047f89ca0249e25b16bd8x-jpg-480x480q75-jpg.jpg",
            name: "Noise Cancelling Headphones",
            price: "3240.00",
            discount: "25",
            rating: 4.0,
            totalSold: 200,
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/VYg5KjL6/S4e5a0f81f7484bb7939b889fe6d27339l-png-480x480-png.jpg",
            name: "Waterproof Bluetooth Speaker",
            price: "2530.00",
            discount: "15",
            rating: 4.2,
            totalSold: 150,
        },
    ];

    const categories = [
        {
            id: 1,
            name: "Jewelry & Watches",
            image: "https://i.ibb.co.com/Xrpr5C8b/Sd99fa45b0c1c47e69f64f10e43157b09-W.png",
        },
        {
            id: 2,
            name: "Home Improvement and Lighting",
            image: "https://i.ibb.co.com/zhcj76PR/S608363f8a6b34a858ee02f2a0a3cfc51j.png",
        },
        {
            id: 3,
            name: "Women's Clothing",
            image: "https://i.ibb.co.com/S4fZKqmH/S0449e88b491d456fa942fe22f32f9b413.png",
        },
        {
            id: 4,
            name: "Sports & Entertainment",
            image: "https://i.ibb.co.com/JRRLMjtJ/S40c546920f2844f680a0fb1e9f1b2a05r.png",
        },
        {
            id: 5,
            name: "Lingerie & Loungewear",
            image: "https://i.ibb.co.com/hFrDZLjP/S3b5fbd68caa649f3aa3891ffc33de747-Z.png",
        },
        {
            id: 6,
            name: "Automotive and Motorcycle",
            image: "https://i.ibb.co.com/8gc1C1t0/Sb36a272afd3e4c7a82a33a4152ae47c1-N.png",
        },
    ];
    return (
        <div className="py-12 container mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-center text-4xl font-bold">
                    Shop By Category
                </h1>
            </div>

            {/* Main */}
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-[#adf1fe] py-8">
                    <div className="pl-8 flex justify-between items-center">
                        <div>
                            <img
                                className="w-16"
                                src={vivaLogo}
                                alt="Viva Logo"
                            />
                            <h2 className="my-4 font-semibold text-lg">
                                Your fashion choice
                            </h2>
                            <button className="btn btn-primary">
                                Shop Now
                            </button>
                        </div>
                        <div>
                            <img
                                className="w-64"
                                src={categoryWomen}
                                alt="Category Women"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mx-8">
                        {products?.map((product) => {
                            return (
                                <div className="bg-white p-2">
                                    <div className="">
                                        <img
                                            className="h-60 w-full"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <h1 className="text-lg text-black font-extrabold">
                                            BDT {product?.price}
                                        </h1>
                                        <del className="text-gray-500">
                                            BDT {product?.price}
                                        </del>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="font-bold flex items-center gap-2">
                                            <img src={starIcon} alt="" />
                                            {product?.rating}
                                        </h1>
                                        |<h1>{product?.totalSold}+ sold</h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {categories?.map((category) => {
                        return (
                            <div className="bg-[#f6f6f6] grid grid-cols-2">
                                <div className="p-4">
                                    <h1 className="text-xl font-bold">
                                        {category.name}
                                    </h1>
                                </div>
                                <div>
                                    <img
                                        className="h-full"
                                        src={category.image}
                                        alt={category.name}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ShopByCategory;
