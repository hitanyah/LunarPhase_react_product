import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Product.scss'

// component
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Footer from '../../components/Footer'
import PdSlider from './components/PdSlider'
import PdLinkArticle from './components/PdLinkArticle'
import PdLineHeart from './components/PdLineHeart'
import PdTopPick from './components/PdTopPick'
import PdItemsAll from './components/PdItemsAll'
// import PdCateSelectAll from './components/PdCateSelectAll'

function Product(props) {
  const [cateId, setCateId] = useState(0)

  // drawing animate
  const [sticky, setSticky] = useState(false)

  // drawing animate
  const [drawing, setDrawing] = useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const sticky = navbar.offsetTop
    function navbarSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
        setSticky(true)
      } else {
        navbar.classList.remove('sticky')
      }
    }

    const block = document.getElementById('naturally-bolck')
    const drawMe = block.offsetTop

    function drawing() {
      if (window.pageYOffset >= drawMe) {
        setDrawing(true)
      } else {
        setDrawing(false)
      }
    }
    window.onscroll = function () {
      drawing()
      navbarSticky()
    }
  }, [])

  const displayDraw = (
    <>
      <PdLineHeart />
    </>
  )

  return (
    <>
      <LunarPhaseNavbar />
      {/* breadcrumb */}
      {/* ----- carousel ----- */}
      <PdSlider />
      {/* ----- item category ----- */}
      <div className="container-fluid">
        <div className="row product-cate-top flex-column">
          <h4>PRODUCT</h4>
          <div className="product-category d-flex flex-column flex-sm-row justify-content-between py-0 px-0 px-lg-5">
            <button onClick={() => setCateId(0)} className="pd-category-btn">
              全部商品
            </button>
            <button onClick={() => setCateId(1)} className="pd-category-btn">
              衛生棉
            </button>
            <button onClick={() => setCateId(2)} className="pd-category-btn">
              衛生棉條
            </button>
            <button onClick={() => setCateId(3)} className="pd-category-btn">
              布衛生棉
            </button>
            <button onClick={() => setCateId(4)} className="pd-category-btn">
              月亮杯
            </button>
            <button onClick={() => setCateId(5)} className="pd-category-btn">
              月亮褲
            </button>
          </div>
          {/* {cateId === 0 && <PdCateSelectAll selectCateId={setCateId} />} */}
          {/* {selectCateId === 1 && (
            <PdCateSelect selectCateId={setCateId} />
          )}
          {selectCateId === 2 && (
            <PdCateSelect selectCateId={setCateId} />
          )}
          {selectCateId === 3 && (
            <PdCateSelect selectCateId={setCateId} />
          )}
          {selectCateId === 4 && (
            <PdCateSelect selectCateId={setCateId} />
          )}
          {selectCateId === 5 && (
            <PdCateSelect selectCateId={setCateId} />
          )} */}
        </div>
        {/* ----- item List ----- */}
        {cateId === 0 && <PdItemsAll cateIdPa={cateId} />}
        {cateId === 1 && <PdItemsAll cateIdPa={cateId} />}
        {cateId === 2 && <PdItemsAll cateIdPa={cateId} />}
        {cateId === 3 && <PdItemsAll cateIdPa={cateId} />}
        {cateId === 4 && <PdItemsAll cateIdPa={cateId} />}
        {cateId === 5 && <PdItemsAll cateIdPa={cateId} />}
      </div>
      {/* ----- top pick ----- */}
      <PdTopPick />
      {/* ----- info & link ----- */}
      <div id="naturally-bolck" className="naturally container-fluid">
        {drawing ? displayDraw : ''}
        {/* <PdLineHeart /> */}
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
          <div className="product-order-link col-12 col-md-6">
            <Link to="/kit">
              <div className="product-order-link-box">
                <img src="/img/Product/items002.jpg" alt="" />
                <div className="product-order-link-info">
                  <h5 className="h5-tc">月訂專區</h5>
                  <p className="mx-0">生理期採購新提案</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="product-order-link col-12 col-md-6">
            <Link to="/kit">
              <div className="product-order-link-box">
                <img src="/img/Product/items003.jpg" alt="" />
                <div className="product-order-link-info">
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
