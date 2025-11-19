import React from "react";
import TopBar from "./topBar/TopBar";
import DiscountCard from "./discountCard/DiscountCard";
import TodaysDeals from "./todaysDeals/TodaysDeals";
import ShopByCategory from "./shopByCategory/ShopByCategory";
import MoreToLove from "./moreToLove/MoreToLove";
import PhotoSearchModal from "../../components/photoSearchModal/PhotoSearchModal";
import AppQrModal from "../../components/appQrModal/AppQrModal";
import SearchItemModal from "../../components/searchItemModal/SearchItemModal";

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

            {/* More to Love */}
            <MoreToLove />
            {/* More to Love End */}

            {/* Photo search modal */}
            <PhotoSearchModal />
            {/* Photo search modal End */}

            {/* App QR Modal */}
            <AppQrModal />
            {/* App QR Modal End */}

            {/* Search Item Modal */}
            <SearchItemModal />
            {/* Search Item Modal End */}
        </div>
    );
}

export default Home;
