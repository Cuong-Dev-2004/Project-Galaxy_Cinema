import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout";

import { HomePage, ViewProducts, Infomation_Products, SideLinesMovie, Movie_List_Page, BuyTicketPage } from "../Pages/Pages";
import Login from "../components/UI/Login";
import RegisterForm from "../components/UI/Register";
import Cart from "../Pages/cart";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path="/Products" element={<ViewProducts />} />
                <Route path="/Infomation" element={<Infomation_Products />} />
                <Route path="/News" element={<SideLinesMovie />} />
                <Route path="/404Page" element={<undefinedPage />} />
                <Route path="/ViewFilm" element={<Movie_List_Page />} />
                <Route path="/DatVe/:slug" element={<BuyTicketPage />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    );
}

export default AppRoutes;
