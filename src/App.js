import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import 'App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style-guide.scss'
import './pages/Index/IndexMy.scss'

// pages
import Index from './pages/Index/IndexMy'
import Product from './pages/Product/Product'
import ProductDetail from './pages/Product/ProductDetail'

function App() {
  return (
    <Router>
      <>
        <Link to="/index-my">Index-</Link>
        <Link to="/product">Product-</Link>
        <Link to="/product-detail">ProductDetail-</Link>

        <Switch>
          <Route path="/index-my">
            <Index />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
