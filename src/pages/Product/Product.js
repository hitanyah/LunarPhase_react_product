import React from 'react'
import { Link } from 'react-router-dom'

import './Product.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdSlider from './components/PdSlider'
import PdLinkArticle from './components/PdLinkArticle'

// import PdAll from './components/PdAll'
import PdLineHeart from './components/PdLineHeart'
import PdCateTop from './components/PdCateTop'
import PdTopPick from './components/PdTopPick'
import PdItemsAll from './components/PdItemsAll'
import PdItemsPd from './components/PdItemsPd'

function Product(props) {
  return (
    <>
      <Navbar />
      {/* breadcrumb */}

      {/* ----- carousel ----- */}
      <PdSlider />
      {/* ----- item category ----- */}
      <div className="container-fluid">
        <div className="row flex-column">
          <h4>PRODUCT</h4>
          <PdCateTop />
        </div>
        {/* <PdItemsAll /> */}
        <PdItemsPd />
      </div>
      {/* ----- top pick ----- */}
      <PdTopPick />
      {/* ----- info & link ----- */}
      <div className="naturally container-fluid">
        <PdLineHeart />
        <div className="row flex-column">
          <h4>Naturally Powerful</h4>
          <h6>安心保證</h6>
          <div className="row naturally-wrap d-flex justify-content-between">
            <div className="naturally-unit text-center mb-4 mx-auto">
              <div className="naturally-unit-img m-3 mx-auto">
                <img src="/img/svg/feather-simple.svg" alt="" />
              </div>
              <h3 className="text-center">COMFORT</h3>
              <p className="mx-0">抗過敏 不濕悶</p>
            </div>
            <div className="naturally-unit mb-4 mx-auto">
              <div className="naturally-unit-img mx-auto m-3">
                <img src="/img/svg/organic-cotton.svg" alt="" />
              </div>
              <h3>ORGANIC</h3>
              <p className="mx-0">選用有機素材</p>
            </div>
            <div className="naturally-unit mb-4 mx-auto">
              <div className="naturally-unit-img mx-auto m-3">
                <img src="/img/svg/leaf.svg" alt="" />
              </div>
              <h3>NATURE</h3>
              <p className="mx-0">天然無添加</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="order-link col-12 col-md-6">
            <Link to="">
              <div className="order-link-box">
                <img src="/img/Product/items002.jpg" alt="" />
                <div className="order-link-info">
                  <h5 className="h5-tc">月訂專區</h5>
                  <p className="mx-0">生理期採購新提案</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="order-link col-12 col-md-6">
            <Link to="">
              <div className="order-link-box">
                <img src="/img/Product/items003.jpg" alt="" />
                <div className="order-link-info">
                  <h5 className="h5-tc">如何挑選</h5>
                  <p className="mx-0">試試小遊戲 測出最適合妳的生理用品</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <PdLinkArticle />
      <Footer />
    </>
  )
}

export default Product
