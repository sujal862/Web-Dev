import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
        <Header />
        <Outlet />   {/* Outlet is a component provided by React Router. It dynamically get changed (looks like a template in which header and footer is fixed)*/}
        <Footer />
        </>
    );
}

export default Layout;