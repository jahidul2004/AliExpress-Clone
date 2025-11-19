import React from "react";
import ProductCard from "../../../components/productCard/ProductCard";

function MoreToLove() {
    const products = [
        {
            id: 1,
            image: "https://i.ibb.co.com/9kMr0d1N/Sf01d74fc327d48079093374da031ae15-O-jpg-480x480q75-jpg.jpg",
            name: "Wireless Bluetooth Headphones",
            price: "3499.00",
            discount: "15",
            rating: 4,
            totalSold: 220,
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/FfBF8xf/Sef1d025cdbbe4f3896684ca4d9657338r-png-480x480-png.jpg",
            name: "Smart Fitness Watch",
            price: "4999.00",
            discount: "10",
            rating: 5,
            totalSold: 340,
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/B2nVqpsG/Se72948754b7744b6b1c9741d9846950d-R-jpg-480x480q75-jpg.jpg",
            name: "Portable Mini Speaker",
            price: "1899.00",
            discount: "5",
            rating: 3,
            totalSold: 150,
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/8DGkhqCL/Se1b434a3c71d4de28ff86cdd8b154f3b-C-jpg-480x480q75-jpg.jpg",
            name: "LED Desk Lamp",
            price: "1299.00",
            discount: "12",
            rating: 4,
            totalSold: 180,
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/f3mZ3xv/Sdb3c9a15d8024eb78ed62538d739b3dai-png-480x480-png.jpg",
            name: "Waterproof Action Camera",
            price: "7999.00",
            discount: "20",
            rating: 5,
            totalSold: 90,
        },
        {
            id: 6,
            image: "https://i.ibb.co.com/Z1wXT8x4/Sba3c1bada1c44fce966ad378587edd24u-jpg-480x480q75-jpg.jpg",
            name: "Wireless Charging Pad",
            price: "1499.00",
            discount: "18",
            rating: 4,
            totalSold: 210,
        },
        {
            id: 7,
            image: "https://i.ibb.co.com/RTkZ9GW7/Sb1ff12415e08435c820ebb771600ab4f-H-jpg-480x480q75-jpg.jpg",
            name: "Smartphone Gimbal Stabilizer",
            price: "5999.00",
            discount: "15",
            rating: 4,
            totalSold: 120,
        },
        {
            id: 8,
            image: "https://i.ibb.co.com/v403WZF4/S239842d547f447f2911a846883e2f95c-O-jpg-480x480q75-jpg.jpg",
            name: "Noise Cancelling Earbuds",
            price: "2999.00",
            discount: "10",
            rating: 3,
            totalSold: 250,
        },
        {
            id: 9,
            image: "https://i.ibb.co.com/KjNNDGjz/S93134dcb38e54fb98ec2acc7e396fa043-jpg-480x480q75-jpg.jpg",
            name: "Mini Projector",
            price: "1099.00",
            discount: "25",
            rating: 5,
            totalSold: 60,
        },
        {
            id: 10,
            image: "https://i.ibb.co.com/fGVjQCJT/S68369b46bd4e4ac48309c460726215ffh-jpg-480x480q75-jpg.jpg",
            name: "Winter shoes for home use only",
            price: "3999.00",
            discount: "12",
            rating: 4,
            totalSold: 80,
        },
        {
            id: 11,
            image: "https://i.ibb.co.com/mr0x9FQK/S1753adeabce84eeebe30c8073f2ea4a0-S-jpg-480x480q75-jpg.jpg",
            name: "Short Trousers for Men (Casual Black)",
            price: "1799.00",
            discount: "8",
            rating: 3,
            totalSold: 200,
        },
        {
            id: 12,
            image: "https://i.ibb.co.com/70JsLRB/S699bc04be98c4417aa623a29dc677977f-jpg-480x480q75-jpg.jpg",
            name: "Women Eye Beautification Tool",
            price: "4999.00",
            discount: "15",
            rating: 4,
            totalSold: 150,
        },
        {
            id: 13,
            image: "https://i.ibb.co.com/jvv0XLLs/S549de1693d944a3b8d7899c4625751595-jpg-480x480q75-jpg.jpg",
            name: "Beautiful Woolen Trouser for men",
            price: "6999.00",
            discount: "20",
            rating: 5,
            totalSold: 100,
        },
        {
            id: 14,
            image: "https://i.ibb.co.com/3yrNcfXX/S471b86b448444a6c8f118b488a58a8bf5-jpg-480x480q75-jpg.jpg",
            name: "D18 Smart watch (waterproof)",
            price: "2199.00",
            discount: "10",
            rating: 4,
            totalSold: 180,
        },
        {
            id: 15,
            image: "https://i.ibb.co.com/3yMsWn42/S183cf270ed9f42819d89164d5ed4fe71-P-jpg-480x480q75-jpg.jpg",
            name: "Calvin Klein 100% Pure Leather Belt for Men",
            price: "999.00",
            discount: "5",
            rating: 3,
            totalSold: 90,
        },
        {
            id: 16,
            image: "https://i.ibb.co.com/wZ4zNfCr/S97b624e394844f74bd6467aeec13cde1p-jpg-480x480q75-jpg.jpg",
            name: "HP High Speed USB Flash Drive",
            price: "799.00",
            discount: "12",
            rating: 4,
            totalSold: 300,
        },
        {
            id: 17,
            image: "https://i.ibb.co.com/MHqwCYK/S84d610091d994060bd781750668191b8-F-jpg-480x480q75-jpg.jpg",
            name: "Casual Leather Backpack for Men",
            price: "7499.00",
            discount: "18",
            rating: 5,
            totalSold: 140,
        },
        {
            id: 18,
            image: "https://i.ibb.co.com/WNsdRWM8/S59b7d7ff03da48338aade5f3272cff54-D-jpg-480x480q75-jpg.jpg",
            name: "Wireless Charger Stand",
            price: "1299.00",
            discount: "10",
            rating: 4,
            totalSold: 230,
        },
        {
            id: 19,
            image: "https://i.ibb.co.com/57Lqg5m/S53f3e20b23d7467a8a7bad9cc26f61fb0-jpg-480x480q75-jpg.jpg",
            name: "Smart Privacy Screen Protector",
            price: "9999.00",
            discount: "22",
            rating: 5,
            totalSold: 70,
        },
        {
            id: 20,
            image: "https://i.ibb.co.com/VpMznMM6/S53abee7cf06d42df8881b0e8504fc873-J-jpg-480x480q75-jpg.jpg",
            name: "Winter face Mask with Heating",
            price: "4999.00",
            discount: "15",
            rating: 4,
            totalSold: 160,
        },
        {
            id: 21,
            image: "https://i.ibb.co.com/d4gnw0tr/S7fad21fae8b04becab93e0e0c15a48f2-Q-jpg-480x480q75-jpg.jpg",
            name: "Electric Toothbrush",
            price: "1999.00",
            discount: "12",
            rating: 4,
            totalSold: 210,
        },
        {
            id: 22,
            image: "https://i.ibb.co.com/Xk5bmy7K/S5c3db9b0b8cf41c0a8743644eaee7cfa9-jpg-480x480q75-jpg.jpg",
            name: "Phone Holder Wall Mount Smart Device",
            price: "8999.00",
            discount: "20",
            rating: 5,
            totalSold: 130,
        },
        {
            id: 23,
            image: "https://i.ibb.co.com/jvXgBhXR/S3c16742ec4b144478e066d5c7473db91-F-jpg-480x480q75-jpg.jpg",
            name: "Phone Charging Port Cleaner",
            price: "6499.00",
            discount: "18",
            rating: 5,
            totalSold: 200,
        },
        {
            id: 24,
            image: "https://i.ibb.co.com/vv4TbVgj/Hbaddcbce75504984a7c5f169650fddd6-B-jpg-480x480q75-jpg.jpg",
            name: "Casual Sneakers for Men (White)",
            price: "10999.00",
            discount: "25",
            rating: 4,
            totalSold: 90,
        },
    ];
    return (
        <div className="py-12 container mx-auto">
            {/* Header */}
            <div>
                <h1 className="text-center text-4xl font-bold">More to love</h1>
            </div>

            {/* Main */}
            <div className="grid grid-cols-6 gap-2 mt-6">
                {products?.map((product) => {
                    return <ProductCard key={product?.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default MoreToLove;
