import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    const [customerName, setCustomerName] = useState("");

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            <Header customerName={customerName} />

            {/* this div around main just to be able to use max width because directly inside the grid it wouldn't work  */}
            <div className="overflow-y-auto">
                <main className="mx-auto max-w-3xl">
                    <Outlet context={[setCustomerName]} />
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default AppLayout;
