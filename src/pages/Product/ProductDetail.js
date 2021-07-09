import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router'

import './ProductDetail.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdDetailBlock from './components/PdDetailBlock'
import PdInfoPad from './components/PdInfoPad'

function ProductDetail() {
  const { itemId } = useParams()

  const [products, setProducts] = useState([])

  async function getPoductFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:3030/product/${itemId}`

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
    setProducts([data])
  }

  useEffect(() => {
    getPoductFromServer()
  }, [])

  const display = (
    <>
      {products.length &&
        products.map((value, index) => {
          return (
            <PdDetailBlock
              itemName={value.itemName}
              itemSize={value.itemSize}
              flowName={value.flowName}
              flowImg={value.flowImg}
              itemPrice={value.itemPrice}
              itemDescription={value.itemDescription}
              optionName={value.optionName}
            />
          )
        })}
    </>
  )

  return (
    <>
      <Navbar />
      {/* items */}
      {display}
      {/* <PdDetailBlock /> */}

      <PdInfoPad />
      <div className="container-fluid py-5 my-5">
        <div className="row shop-article my-auto py-3">
          <div className="article-img col-12 col-md-4 mb-3 mb-md-0 p-3">
            <img src="/img/Product/items002.jpg" alt="" />
          </div>
          <div className="article-info col-12 col-md-8 text-left pl-3 pl-md-4 py-3">
            <div>
              <h5 className="h5-tc">月訂專區</h5>
              <p>
                製作專屬於你的生理期套組
                <br />
                各式產品自由選配
                <br />
                輕鬆點選送到家
              </p>
            </div>
            <div className="btn-more ml-auto mt-auto">
              <Link to="">more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="top-pick you-love container-fluid">
        <div className="row flex-column">
          <h4>You’ll also Love</h4>
          <h6 className="h6-tc">專屬推薦</h6>
          <div className="row pick-unit-wrap">
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0 mt-2">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0 mt-2">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
            <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="pick-unit-img">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-name mb-0 mt-2">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price">
                <p className="my-0">$ 70</p>
              </div>
              <button className="btn-border-s mx-auto mt-4">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h4>Review</h4>
          <h6 className="h6-tc">商品評論</h6>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail
