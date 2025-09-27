import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";

import { HomePage, ViewProducts, Infomation_Products, SideLinesMovie } from "../Pages/Pages";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/Products" element={<ViewProducts />} />
                <Route path="/Infomation" element={<Infomation_Products />} />
                <Route path="/News" element={<SideLinesMovie />} />
                <Route path="/404Page" element={<undefinedPage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
