import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default DefaultLayout;