import React, { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Order from "./Order";
import Login from "./Login";
import PrivacyPolicy from "./PrivacyPolicy";
import ThankYou from "./ThankYou";
import NotFound from "./NotFound";

import { paths } from '../routes/paths';

const Main = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname] )

    return (
        <main className="main">
            <Routes>
                <Route path={paths.home} element={<Home/>}></Route>
                <Route path={paths.about} element={<About/>}></Route>
                <Route path={paths.menu} element={<Menu/>}></Route>
                <Route path={paths.reservations} element={<Reservations/>}></Route>
                <Route path={paths.order} element={<Order/>}></Route>
                <Route path={paths.login} element={<Login/>}></Route>
                <Route path={paths.pp} element={<PrivacyPolicy/>}></Route>
                <Route path={paths.thankYou} element={<ThankYou/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;