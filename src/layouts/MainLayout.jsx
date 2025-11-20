import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import RegisterModal from "../components/registerModal/RegisterModal";

function MainLayout() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Navbar End */}

            {/* Outlet */}
            <Outlet />
            {/* Outlet End */}

            {/* Register Modal */}
            <RegisterModal />
            {/* Register Modal End */}

            {/* Footer */}
            <Footer />
            {/* Footer end */}
        </div>
    );
}

export default MainLayout;
