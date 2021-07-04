import React from 'react'
import './Product.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductSlider from './components/ProductSlider'

function Product() {
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
      <div className="product-carousel container-fluid">
        <ProductSlider />
        {/* <img src="/img/Index/hero001.jpg" alt="" /> */}
      </div>
      {/* ----- item category ----- */}
      <div className="container-fluid">
        <div className="row flex-column">
          <h4>PRODUCT</h4>
          <div className="product-category d-flex flex-column flex-sm-row justify-content-between py-0 px-0 px-lg-5">
            <button className="category-btn">熱門活動</button>
            <button className="category-btn">衛生棉</button>
            <button className="category-btn">布衛生棉</button>
            <button className="category-btn">衛生棉條</button>
            <button className="category-btn">月亮杯</button>
            <button className="category-btn">生理褲</button>
            <button className="category-btn">全部商品</button>
          </div>
          <div className="product-category-sec text-center mx-auto">
            <div className="d-flex mx-auto justify-content-between py-3">
              <div className="dropdown product-dropdown">
                <button
                  className="btn-border-s dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  選擇類別
                </button>
                <div
                  className="dropdown-menu product-dropdown-menu"
                  aria-labelledby="dropdownMenu1"
                >
                  <button className="dropdown-item" type="button">
                    日用
                  </button>
                  <button className="dropdown-item" type="button">
                    夜用
                  </button>
                  <button className="dropdown-item" type="button">
                    護墊
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row product-content flex-column">
          <div className="row product-unit-wrap">
            <div className="product-unit col-12 col-md-6 col-lg-4 mb-3">
              <div className="product-unit-img col-12">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-tag-box d-flex justify-content-between">
                <img
                  className="item-tag-drop"
                  src="/img/svg/drop03.svg"
                  alt=""
                />
                <div className="item-tag-info">
                  <p>23cm</p>
                </div>
              </div>
              <div className="item-name text-left">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price text-left">
                <p className="p-price">$ 70</p>
              </div>
            </div>
            <div className="product-unit col-12 col-md-6 col-lg-4 mb-3">
              <div className="product-unit-img col-12">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-tag-box d-flex justify-content-between">
                <img
                  className="item-tag-drop"
                  src="/img/svg/drop03.svg"
                  alt=""
                />
                <div className="item-tag-info">
                  <p>23cm</p>
                </div>
              </div>
              <div className="item-name text-left">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price text-left">
                <p className="p-price">$ 70</p>
              </div>
            </div>
            <div className="product-unit col-12 col-md-6 col-lg-4 mb-3">
              <div className="product-unit-img col-12">
                <a href>
                  <img src="/img/Product/pad001.jpg" alt="" />
                </a>
              </div>
              <div className="item-tag-box d-flex justify-content-between">
                <img
                  className="item-tag-drop"
                  src="/img/svg/drop03.svg"
                  alt=""
                />
                <div className="item-tag-info">
                  <p>23cm</p>
                </div>
              </div>
              <div className="item-name text-left">
                <a href>
                  <h5 className="h5-item">弦月柔棉 日用超薄衛生棉</h5>
                </a>
              </div>
              <div className="item-price text-left">
                <p className="p-price">$ 70</p>
              </div>
            </div>
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
        <div className="naturally-moving-line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1441.055"
            height="80.065"
            viewBox="0 0 1441.055 80.065"
          >
            <path
              className="path-heart"
              id="Path_878"
              data-name="Path 878"
              d="M860.9,618.985c28.56-23.532,152.83-20.141,188.436-19.11,40.945,1.186,103.98,4.447,143.646-7.179,12.869-3.771,25.324-10.049,33.124-20.529,3-4.036,4.732-9.138,3.4-13.87s-6.3-8.727-11.6-8.254-9.457,6.387-6.858,10.654a21.12,21.12,0,0,0-8.546-7.266c-3.587-1.486-8.159-1.389-11.119.987-3,2.409-3.678,6.615-2.515,10.11s3.854,6.388,6.753,8.9a60.473,60.473,0,0,0,22.028,12.032c45.583,13.754,99.961-2.554,146.5-5.875,57.049-4.071,114.376-5.452,171.613-4.162,181.009,4.079,354.344,54.079,535.224,52.614,56.824-.462,179.653-7.035,229.915-30.262"
              transform="translate(-860.26 -549.001)"
              fill="none"
              stroke="#e64b4b"
              strokeMiterlimit={10}
              strokeWidth={2}
            />
          </svg>
        </div>
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
              <a href>
                <img src="/img/Product/items002.jpg" alt="" />
              </a>
              <div className="order-link-info">
                <a href>
                  <h5 className="h5-tc">月訂專區</h5>
                </a>
                <p className="mx-0">生理期採購新提案</p>
              </div>
            </div>
          </div>
          <div className="order-link col-12 col-md-6">
            <div className="order-link-box">
              <a href>
                <img src="/img/Product/items003.jpg" alt="" />
              </a>
              <div className="order-link-info">
                <a href>
                  <h5 className="h5-tc">如何挑選</h5>
                </a>
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
                想了解各種生理用品的使用方式嗎？進來瞧瞧吧！
              </p>
            </div>
            <div className="btn-more ml-auto">
              <a href>more</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
