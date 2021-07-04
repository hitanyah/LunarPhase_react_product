import React from 'react'
import './IndexMy.scss'

// component
import HeroSlider from './IndexHeroSlider'
import NavbarIndex from '../../components/NavbarIndex'

// bootstrap
// import Button from 'react-bootstrap/Button'

// react-icon
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { VscChevronLeft } from 'react-icons/vsc'
import { VscChevronRight } from 'react-icons/vsc'

function Index() {
  return (
    <>
      {/* HEADER */}
      <header id="top">
        <div className="index-top-wrap">
          <h1 className="text-left mb-3">
            <img
              className="index-top-logo"
              src="/img/Index/logo-l-dark.svg"
              alt=""
            />
          </h1>
          <div className="index-top-sns">
            <a className="mr-3" href>
              <GrFacebookOption />
            </a>
            <a href>
              <GrInstagram />
            </a>
          </div>
          <nav className="index-top-menu">
            <ul className="d-flex flex-column index-top-nav align-items-end">
              <li className="col">
                <a href="#shop">PRODUCT</a>
              </li>
              <li className="col">
                <a href="#article">ARTICLE</a>
              </li>
              <li className="col">
                <a href="#kit">KIT</a>
              </li>
              <li className="col">
                <a href="#order">EVENT</a>
              </li>
              <li className="col">
                <a href="#join-us">JOIN US</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="index-top-letter">
          <img src="/img/Index/calligraphy002.svg" alt="StayTrue" />
        </div>

        <div className="index-top-bottom d-flex justify-content-between py-3">
          <div className="index-login-bar d-flex my-auto">
            <a href>LOG IN</a>
            <p> / </p>
            <a href>CART</a>
          </div>
          <div className="index-news-bar d-flex my-auto">
            <a className="index-news-bar-info my-auto py-0" href>
              新品上市 限時免運中
            </a>
            {/* <div className="btn-soft-green mx-auto">
              <a href>SHOP NOW</a>
            </div> */}
          </div>
        </div>
        {/* carousel */}
        <div className="index-hero-slider">
          <HeroSlider />
        </div>
      </header>

      {/* NAVBAR */}

      <NavbarIndex />

      {/* ABOUT */}
      <div id="about" className="index-about container-fluid">
        <div className="row index-about-row">
          <h2 className="col-12">Our Mission</h2>
          <img
            className="index-about-content col-12 col-md-9 col-lg-7 mx-auto"
            src="/img/Index/calligraphy001.svg"
            alt="Our_Mission"
          />
          <div className="row col-12 index-about-unit justify-content-between">
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <a href>
                <span>01.</span>
                <h3>SHOP</h3>
                <p className="p-tc">
                  提供各式生理用品
                  <br />
                  選用有機天然素材製作
                  <br />
                  照顧身體 也照顧環境
                </p>
              </a>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <a href>
                <span>02.</span>
                <h3>ARTICLE</h3>
                <p className="p-tc">
                  關於女人 關於身體
                  <br />
                  分享更多小秘密
                </p>
              </a>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <a href>
                <span>03.</span>
                <h3>ORDER</h3>
                <p className="p-tc">
                  月訂專區
                  <br />
                  生理期採購新提案
                </p>
              </a>
            </div>
            <div className="index-about-unit-block col-12 col-md-6 col-lg-3 px-5 px-md-3 mb-3">
              <a href>
                <span>04.</span>
                <h3>EVENT</h3>
                <p className="p-tc">和我們一起探索身心靈</p>
              </a>
            </div>
          </div>
        </div>
        <div className="index-bodyline-l" />
        <div className="index-bodyline-r" />
      </div>

      {/* product */}
      <div id="product" className="index-product container-fluid text-center">
        <div className="row index-product-row">
          <h2 className="col-12">PRODUCT</h2>
          <div className="index-product-bg-mountain">
            <img src="/img/Index/mountain-w.svg" alt="mountain-bg" />
          </div>
          <div className="col-12 row index-product-unit-wrap justify-content-between mx-auto">
            <div className="index-product-unit col-12 col-md-2 mt-md-5">
              <div className="index-product-moon-frame mx-auto">
                <a href>
                  <div className="index-moon moon1">
                    <img src="/img/Index/panties.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="index-product-link">
                <a href>
                  <h6 className="h6-tc">生理褲</h6>
                </a>
              </div>
            </div>
            <div className="index-product-unit col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame  mx-auto">
                <a href>
                  <div className="index-moon moon2">
                    <img src="/img/Index/cloth-pad.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="index-product-link">
                <a href>
                  <h6 className="h6-tc">布衛生棉</h6>
                </a>
              </div>
            </div>
            <div className="index-product-unit col-12 col-md-2 ">
              <div className="index-product-moon-frame  mx-auto">
                <a href>
                  <div className="index-moon moon3">
                    <img src="/img/Index/pad.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="index-product-link">
                <a href>
                  <h6 className="h6-tc">衛生棉</h6>
                </a>
              </div>
            </div>
            <div className="index-product-unit col-12 col-md-2 mt-3 mt-md-3">
              <div className="index-product-moon-frame mx-auto">
                <a href>
                  <div className="index-moon moon4">
                    <img src="/img/Index/tampon.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="index-product-link">
                <a href>
                  <h6 className="h6-tc">衛生棉條</h6>
                </a>
              </div>
            </div>
            <div className="index-product-unit col-12 col-md-2 mt-3 mt-md-5">
              <div className="index-product-moon-frame mx-auto">
                <a href>
                  <div className="index-moon moon5">
                    <img src="/img/Index/menstrual-cup.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="index-product-link">
                <a href>
                  <h6 className="h6-tc">月亮杯</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <button className="btn-soft-pink">
              <a href>SHOP ALL</a>
            </button>
          </div>
        </div>
      </div>
      {/* ARTICLE */}
      <div id="article" className="index-article container-fluid">
        <div className="row">
          <div className="index-article-header d-flex justify-content-between col-12 mx-0 px-0">
            <h2>ARTICLE</h2>
            <div className="index-article-tags d-flex">
              <h6 className="h6-tc ml-3">生理期小知識 / 兩性學堂 / 流言終結</h6>
            </div>
          </div>
          <div className="index-article-topic row col-12">
            <div className="index-article-topic-content text-left col-12 col-md-6 col-lg-8 ml-0 pl-0 pr-0 pr-md-3">
              <p className="index-article-date mb-1">2020.02.20</p>
              <a href>
                <h4 className="h4-tc">文章標題</h4>
                <p className="p-tc">
                  直到是否權力心理線上以下男人中央廠商請求參考面前幻想歌手夫妻，一把魯蛇記錄小七我的心複雜一週大會更大專用討論當中接觸品質，有的對於觀察做什麼一項不然，見面很快最好最高怎麼辦客人就好一絲各地，過來就會一看犯罪明年一天伺服器究竟都會傳統那裡否則，對不起廣泛房。
                </p>
              </a>
              <div className="d-flex justify-content-between pb-0">
                <div className="btn-read text-center">
                  <a href>read</a>
                </div>
                <div>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                </div>
              </div>
            </div>
            <div className="index-article-topic-img col-12 col-md-6 col-lg-4 p-0 my-4 my-md-auto">
              <a href>
                <img src="/img/Index/hero001.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="index-article-unit-wrap row text-left col-12">
            <div className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
              <p className="index-article-date mb-1">2020.02.20</p>
              <div className="index-article-unit-img col-12 p-0">
                <a href>
                  <img src="/img/Index/hero001.jpg" alt="" />
                  <h5 className="h5-tc my-2">文章標題222</h5>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                <div className="btn-read text-center">
                  <a href>read</a>
                </div>
                <div className="text-right">
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                </div>
              </div>
            </div>
            <div className="border-right-2 index-article-unit col-12 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
              <p className="index-article-date mb-1">2020.02.20</p>
              <div className="index-article-unit-img col-12 p-0">
                <a href>
                  <img src="/img/Index/hero001.jpg" alt="" />
                  <h5 className="h5-tc my-2">文章標題222</h5>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                <div className="btn-read text-center">
                  <a href>read</a>
                </div>
                <div className="text-right">
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                </div>
              </div>
            </div>
            <div className="border-right-1 index-article-unit col-12 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
              <p className="index-article-date mb-1">2020.02.20</p>
              <div className="index-article-unit-img col-12 p-0">
                <a href>
                  <img src="/img/Index/hero001.jpg" alt="" />
                  <h5 className="h5-tc my-2">文章標題222</h5>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                <div className="btn-read text-center">
                  <a href>read</a>
                </div>
                <div className="text-right">
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                </div>
              </div>
            </div>
            <div className="index-article-unit col-12 col-md-6 col-lg-3 pl-3 pr-3 mb-5 mb-md-4 mb-lg-0">
              <p className="index-article-date mb-1">2020.02.20</p>
              <div className="index-article-unit-img col-12 p-0">
                <a href>
                  <img src="/img/Index/hero001.jpg" alt="" />
                  <h5 className="h5-tc my-2">文章標題222</h5>
                </a>
              </div>
              <div className="d-flex justify-content-between align-items-end pb-0 mt-4">
                <div className="btn-read text-center">
                  <a href>read</a>
                </div>
                <div className="text-right">
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                  <a className="btn-tag ml-2" href>
                    #123
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="index-article-footer d-flex justify-content-between mx-0 px-0 col-12">
            <div className="d-flex">
              <a className="btn-prev mr-3" href>
                <i className="fas fa-chevron-left" />
              </a>
              <a className="btn-next" href>
                <i className="fas fa-chevron-right" />
              </a>
            </div>
            <a className="btn-more" href>
              more
            </a>
          </div>
        </div>
      </div>
      {/* KIT */}
      <div id="kit" className="index-kit container-fluid">
        <div className="index-kit-pic1" />
        <div className="index-kit-pic2" />
        <div className="index-kit-pic3" />
        <div className="index-kit-pic4" />
        <div className="index-kit-content row justify-content-between">
          <div className="index-kit-content-l pl-0 col-12 col-md-4">
            <h2>KIT</h2>
          </div>
          <div className="index-kit-content-r col-12 col-md-8">
            <h5 className="h5-tc">月訂專區 - 生理期採購新提案</h5>
            <p className="my-4">
              每個女生都有個生理期秘密小包包，裡面是精挑細選的最佳選手。
              <br />
              Lunar Phase
              提供新型態生理用品訂購方式，可依照妳的需求自由選購生理用品，想配多少數量自己決定。想試用的商品，只買一個也能選配。
              <br />
              輕鬆點選，就能在每個月該來的時候送到家，還能隨時更換項目或取消。
            </p>
            <div className="row p-0 m-0 justify-content-between ">
              <h6 className="h6-tc col-12 col-md-4">生理用品自由選配</h6>
              <h6 className="h6-tc col-12 col-md-4">輕鬆點選送到家</h6>
              <h6 className="h6-tc col-12 col-md-4">測試最適合妳的組合</h6>
            </div>
          </div>
        </div>
        <div className="btn-more index-kit-bottom mr-0 pr-0">
          <a className href>
            more
          </a>
        </div>
      </div>
      {/* EVENT */}
      <div id="event" className="index-event radial-gradient container-fluid">
        <div className="index-event-top d-flex justify-content-between">
          <div className="index-event-block" />
          <h2>EVENT</h2>
          <a className="btn-more" href>
            more
          </a>
        </div>
        <h6 className="h6-tc text-center">活動快報</h6>
        <div className="d-flex mt-5">
          <button className="mr-3">
            <VscChevronLeft />
          </button>
          <div className="index-event-content row m-0 justify-content-between">
            <div className="index-event-unit-wrap d-flex justify-content-between">
              <div className="index-event-unit">
                <div className="col-4">
                  <p className="index-article-date mb-1">2020.02.20</p>
                  <a href>
                    <img
                      className="index-event-unit-img"
                      src="/img/Index/hero003.jpg"
                      alt=""
                    />
                  </a>
                  <a href>
                    <h5 className="h5-tc my-2">文章標題</h5>
                  </a>
                  <p className="p-tc">
                    轉載位於需要圖書館本身超市氣息房間真實性，男性出去學生探索老婆一股，緊張直到是這樣或許平時職位男生你會，關心否則蘋果調查成立書庫當前填寫作者要是飲食。
                  </p>
                  <div className="underline" />
                  <p>報名中</p>
                </div>
              </div>
            </div>
          </div>
          <button className="">
            <VscChevronRight />
          </button>
        </div>
      </div>
      <div className="banner container-fluid">
        <div className="banner-img"></div>
      </div>
      <div className="join-us container text-center">
        <h2>Join Us</h2>
        <p className="p-tc">和我們一起探索更多生理期的大秘密</p>
        <button className="btn-soft-green">SIGN IN</button>
      </div>
      {/* FOOTER */}
      <div className="index-footer container-fluid">
        <footer className="index-footer-top row">
          <div className="row m-0 p-0 justify-content-between col-12">
            <div className="index-footer-logo my-auto col-12 col-md-2">
              <a href="#top">
                <img src="/img/Index/logo-s-dark.svg" alt="" />
              </a>
            </div>
            <nav className="my-auto col-12 col-md-10 px-0">
              <ul className="d-flex justify-content-center justify-content-md-end  my-3 my-md-0 px-auto px-md-0 col-12">
                <li>
                  <a className="footer-a ml-3" href>
                    PRODUCT
                  </a>
                </li>
                <li>
                  <a className="footer-a ml-3" href>
                    BLOG
                  </a>
                </li>
                <li>
                  <a className="footer-a ml-3" href>
                    KIT
                  </a>
                </li>
                <li>
                  <a className="footer-a ml-3" href>
                    EVENT
                  </a>
                </li>
                <li>
                  <a className="footer-a ml-3" href>
                    JOIN US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row m-0 mt-3 p-0 index-footer-bottom col-12 justify-content-between align-items-end">
            <div className="small text-left p-0 mt-3 col-12 col-md-6">
              <p>
                JSMART co.
                <br />
                台北市大安區復興南路一段390號2樓
                <br />
                jsmart.girls@gmail.com
              </p>
            </div>
            <div className="text-right p-0 col-12 col-md-6">
              <p className="small">Copyright © JSMART All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Index