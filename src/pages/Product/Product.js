import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Product.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdSlider from './components/PdSlider'
// import PdAll from './components/PdAll'
import PdLineHeart from './components/PdLineHeart'
import PdCateTop from './components/PdCateTop'
import PdItemBlock from './components/PdItemBlock'

function Product(props) {
  const [products, setProducts] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getPoductFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3030/product/all'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setProducts(data)
  }

  useEffect(() => {
    getPoductFromServer()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [products])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="row product-content flex-column">
        <div className="row product-unit-wrap">
          {products.length &&
            products.map((value, index) => {
              return (
                <>
                  <PdItemBlock
                    itemSize={value.itemSize}
                    itemName={value.itemName}
                    itemPrice={value.itemPrice}
                  />
                </>
              )
            })}
        </div>
        <div className="product-unit-page mt-5">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn ">
              &lt; PREV
            </button>
            <button type="button" className="btn ">
              1
            </button>
            <button type="button" className="btn ">
              NEXT &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <Navbar />
      {/* breadcrumb */}
      <div className="top-line container-fluid">
        <div className="d-flex justify-content-between">
          <div className="bread-box">
            <div className="bread d-flex">
              <a href>HOME</a>
              <p>&gt;</p>
              <a href>PRODUCT</a>
            </div>
          </div>
          <div className="search-box">
            <form className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <button className="search-button" href="#">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ----- carousel ----- */}
      <PdSlider />
      {/* ----- item category ----- */}
      <div className="container-fluid">
        <div className="row flex-column">
          <h4>PRODUCT</h4>
          <PdCateTop />
        </div>
        {dataLoading ? loading : display}
      </div>
      {/* ----- top pick ----- */}
      <div className="top-pick container-fluid">
        <div className="row flex-column">
          <h4>Top Pick</h4>
          <h6 className="h6-tc">熱門推薦</h6>
          <div className="row pick-unit-wrap">
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="p-price my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="p-price my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="p-price my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
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
            <div className="order-link-box">
              <Link to="">
                <img src="/img/Product/items002.jpg" alt="" />
              </Link>
              <div className="order-link-info">
                <Link to="">
                  <h5 className="h5-tc">月訂專區</h5>
                </Link>
                <p className="mx-0">生理期採購新提案</p>
              </div>
            </div>
          </div>
          <div className="order-link col-12 col-md-6">
            <div className="order-link-box">
              <Link to="">
                <img src="/img/Product/items003.jpg" alt="" />
              </Link>
              <div className="order-link-info">
                <Link to="">
                  <h5 className="h5-tc">如何挑選</h5>
                </Link>
                <p className="mx-0">試試小遊戲 測出最適合妳的生理用品</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row product-article py-3">
          <div className="product-article-img col-12 col-md-4 mb-3 mb-md-0 p-3">
            <img src="/img/Product/items001.jpg" alt="" />
          </div>
          <div className="product-article-info col-12 col-md-8 text-left pl-3 pl-md-4 py-3">
            <div>
              <h5 className="h5-tc">初學者指南</h5>
              <p>
                獻給想告別棉棉，卻遲遲不敢擁抱新式生理用品的妳...
                <br />
                這裡有一些關於棉條、月亮杯的基本知識，
                <br />
                想了解各種生理用品的使用方式嗎？快來瞧瞧吧！
              </p>
            </div>
            <div className="btn-more ml-auto">
              <Link to="/article">more</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
