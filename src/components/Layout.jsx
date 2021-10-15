import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Routes from '../routes/routes'
import Footer from './Footer'
import Home from '../pages/Home'
const Layout = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout
