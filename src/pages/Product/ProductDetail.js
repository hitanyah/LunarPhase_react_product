import React from 'react'

import './ProductDetail.scss'

// component
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// react-icon
import { FaRegBookmark } from 'react-icons/fa'

function ProductDetail() {
  return (
    <>
      <Navbar />
      {/* items */}
      <div className="container-fluid">
        <div className="item row justify-content-between">
          <div className="item-pic-wrap d-flex col-12 col-md-6">
            <div className="item-pic-select col-2 mx-2 p-0 ">
              <div className="item-pic-select-dot mb-3">
                <img src="/img/Product/pad002.jpg" alt="" />
              </div>
              <div className="item-pic-select-dot mb-3">
                <img src="/img/Product/pad002.jpg" alt="" />
              </div>
            </div>
            <div className="item-pic">
              <img src="/img/Product/pad002.jpg" alt="" />
            </div>
          </div>
          <div className="item-info-wrap text-left col-12 col-md-6 mt-5 mt-md-0 pl-5">
            <div className="item-name mb-3">
              <h5 className="h5-item-l">弦月柔棉 日用超薄衛生棉</h5>
            </div>
            <div className="item-tag d-flex">
              <img
                className="item-drop mr-2"
                src="../img/svg/drop03.svg"
                alt=""
              />
              <p className="tags my-auto mx-0"> 23 cm</p>
              <p className="tags my-auto mx-0"> Slim</p>
            </div>
            <div className="item-price-line d-flex justify-content-between align-items-center ">
              <div className="item-price">
                <p className="p-price my-auto">$ 70</p>
              </div>
              <div className="bookmark-add d-flex">
                <p className="underline my-auto ">
                  <FaRegBookmark /> + 加入收藏
                </p>
              </div>
            </div>
            <div className="item-detail">
              <h6>特色</h6>
              <div className="item-detail-content mb-0 pd-0">
                <p>
                  100% 有機棉
                  <br />
                  吸收安心保證
                  <br />
                  親膚少刺激
                </p>
              </div>
            </div>
            <div className="item-style d-flex justify-content-between">
              <h6>規格</h6>
              <div className="item-style-tag">
                <button className="btn-tag">12 pic</button>
              </div>
            </div>
            <div className="item-qty d-flex justify-content-between">
              <h6 className>數量</h6>
              <div className="qty-input input-group">
                <div className="input-group-btn">
                  <button className="btn " type="button" id="qty-sub">
                    -
                  </button>
                </div>
                <input type="text" className="form-control" placeholder={1} />
                <div className="input-group-btn">
                  <button className="btn" type="button" id="qty-add">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="add-cart col-12 pl-5">
              <button className="btn-border-l">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      <div className="item-content-top container-fluid">
        <div className="row text-left justify-content-around align-item-center">
          <div className="pad-img col-12 col-md-6 ">
            <img src="/img/Product/pad-cut.png" alt="" />
          </div>
          <div className="col-12 col-md-6 my-auto pl-5">
            <div className="underline">
              <h4>Selected With Care</h4>
              <h6 className="h6-tc">嚴選素材無添加</h6>
            </div>
            <div className="mt-4">
              <p>
                <span>1. </span>無化學染料
              </p>
              <p>
                <span>2. </span>無甲醛
              </p>
              <p>
                <span>3. </span>無防腐劑
              </p>
              <p>
                <span>4. </span>無化學香料
              </p>
              <p>
                <span>5. </span>無遷移性螢光增白劑
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item-content-sec container-fluid">
        <div className="row flex-column text-left">
          <h4>Naturally Powerful</h4>
          <h6 className="h6-tc">100% 有機棉</h6>
          <p>
            經過皮膚病學測試
            <br />
            透氣、低過敏性的 100% 有機棉。
          </p>
        </div>
      </div>
      <div className="item-content container-fluid">
        <div className="row justify-content-between text-left ">
          <div className="col-12 col-md-6">
            <h4>New Ultra Thin</h4>
            <h6 className="h6-tc">安心吸收保證</h6>
            <p>
              全新超薄吸收層
              <br />
              長達 8 小時的安心保護
              <br />
              快速吸收通道將液體吸入儲存層，
              <br />
              防漏屏障提供持久保護。
            </p>
          </div>
          <div className="thin-img col-12 col-md-6">
            <img src="/img/Product/pad005.jpg" alt="" />
          </div>
        </div>
        <div className="row naked-truth  justify-content-between text-left">
          <div className="col-12 col-md-6">
            <div className="coner-img1">
              <img src="/img/Product/girls01.jpg" alt="" />
            </div>
            <div className="coner-img2">
              <img src="/img/Product/pad007.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>The Naked Truth</h4>
            <h6>親膚少刺激</h6>
            <p>
              舒適以上的體感
              <br />
              超吸水絨面膚觸柔軟，
              <br />
              可自由活動並保持原位，清爽零感覺。
            </p>
          </div>
          <div className="bg-white col-12"></div>
        </div>
      </div>
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
              <a href>more</a>
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
