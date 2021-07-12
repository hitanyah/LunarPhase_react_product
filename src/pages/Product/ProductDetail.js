import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import { useParams } from 'react-router'

import './ProductDetail.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PdDetailBlock from './components/PdDetailBlock'
import PdInfoPad from './components/PdInfoPad'
import ArticleCard from './components/ArticleCard'
import PdAlsoLove from './components/PdAlsoLove'
import PdLinkKit from './components/PdLinkKit'

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
              itemId={value.itemId}
              itemName={value.itemName}
              itemCoverImg={value.itemCoverImg}
              itemImg={value.itemImg}
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

  // const pisplayInfo = ({ itemId }) =>{
  //   switch

  // }

  return (
    <>
      <Navbar />
      {/* items */}
      {display}
      {/* <PdDetailBlock /> */}

      <PdInfoPad />

      <PdLinkKit />

      <div className="top-pick you-love container-fluid">
        <div className="row flex-column">
          <h4>You’ll also Love</h4>
          <h6 className="h6-tc">專屬推薦</h6>
          <PdAlsoLove />
        </div>
      </div>

      <ArticleCard />
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
