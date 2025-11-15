import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

function MainLayout() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Navbar End */}

            {/* Outlet */}
            <Outlet />
            {/* Outlet End */}

            {/* Footer */}
            <Footer />
            {/* Footer end */}
        </div>
    );
}

export default MainLayout;
