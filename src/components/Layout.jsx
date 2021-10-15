import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Header from './Header'
import Routes from '../routes/routes'
import Footer from './Footer'
import Home from '../pages/Home'
const Layout = () => {
    return (
        < HashRouter>
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        </ HashRouter>
    )
}

export default Layout
