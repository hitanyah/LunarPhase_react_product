import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
// pages
import IndexMy from './pages/Index/IndexMy'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'

function App() {
  return (
    <Router>
      <>
        <ScrollToTop>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/product-detail/:itemId">
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <IndexMy />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
