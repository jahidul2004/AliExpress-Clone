import React, { useEffect } from "react";
import watchIcon from "../../../assets/icons/watchIcon.gif";
import ProductCard from "../../../components/productCard/ProductCard";

function TodaysDeals() {
    const [timeLeft, setTimeLeft] = React.useState({
        hours: 10,
        minutes: 35,
        seconds: 50,
    });

    const products = [
        {
            id: 1,
            image: "https://i.ibb.co.com/JR1hNSCh/S565b9067baf4485c8b4aad66c8812f2ax-jpg-480x480q75-jpg.jpg",
            name: "Fully Automatic Espresso Machine",
            price: "10.00",
            discount: "20",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/Kcp2Z2X2/S7b3301f42369441aa90ac715691c0b6a-K-png-480x480-png.jpg",
            name: "Waterproof Bluetooth Speaker",
            price: "20.00",
            discount: "15",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/fzYLQr33/S11d5be76aa8c438db0f3fbc27d4844fe-C-jpg-480x480q75-jpg.jpg",
            name: "Noise Cancelling Headphones",
            price: "30.00",
            discount: "25",
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/0dSRLTy/S36bd821f2fcb4b6c878b8ab2d3a8a72br-jpg-480x480q75-jpg.jpg",
            name: "Smart Fitness Tracker Device",
            price: "40.00",
            discount: "10",
        },
    ];
    return (
        <div className="pt-12 container mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-center text-4xl font-bold">
                    Today's deals
                </h1>
            </div>
            {/* Main */}
            <div className="border border-gray-300 p-4 md:p-6 mt-6 grid grid-cols-3 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-2xl font-semibold">SuperDeals</h1>
                    <div className="bg-[#feebeb] my-4 w-max py-2 px-4 flex items-center gap-4 rounded-full text-lg font-semibold">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={watchIcon}
                            alt=""
                        />
                        <h1>Ends in:</h1>
                        <h1>
                            {timeLeft.hours}h {timeLeft.minutes}m{" "}
                            {timeLeft.seconds}s
                        </h1>
                    </div>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
                <div className="grid grid-cols-4 gap-4 col-span-2">
                    {products?.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodaysDeals;
