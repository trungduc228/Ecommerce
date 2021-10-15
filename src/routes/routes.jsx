import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import CatalogWoman from '../pages/CatalogWoman'
import CatalogMan from '../pages/CatalogMan'
import ProductMan from '../pages/ProductMan'
import ProductWoman from '../pages/ProductWoman'
const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cart" exact={true} component={Cart} />
            <Route path="/product/catalogWoman" exact={true} component={CatalogWoman} />
            <Route path="/product/catalogMan" exact={true} component={CatalogMan} />
            <Route path="/catalog/:slug" exact={true} component={ProductWoman} />
            <Route path="/catalog/product/:slug" exact={true} component={ProductMan} />

        </Switch>
    )
}

export default Routes
