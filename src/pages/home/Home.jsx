import React from "react";
import TopBar from "./topBar/TopBar";
import DiscountCard from "./discountCard/DiscountCard";
import TodaysDeals from "./todaysDeals/TodaysDeals";
import ShopByCategory from "./shopByCategory/ShopByCategory";

function Home() {
    return (
        <div>
            {/* Top Bar */}
            <TopBar />
            {/* Top Bar End */}

            {/* Discount card */}
            <DiscountCard />
            {/* Discount card End */}

            {/* Todays deals */}
            <TodaysDeals />
            {/* Todays deals End */}

            {/* Shop By Category */}
            <ShopByCategory />
            {/* Shop By Category End */}
        </div>
    );
}

export default Home;
