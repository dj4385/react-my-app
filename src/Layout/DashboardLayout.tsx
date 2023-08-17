import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
    return (
        <>
            <div className="mb-2">
                <Navbar />
            </div>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default DashboardLayout;