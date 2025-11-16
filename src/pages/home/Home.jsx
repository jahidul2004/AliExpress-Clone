import React from "react";
import TopBar from "./topBar/TopBar";
import DiscountCard from "./discountCard/DiscountCard";
import TodaysDeals from "./todaysDeals/TodaysDeals";

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
        </div>
    );
}

export default Home;
