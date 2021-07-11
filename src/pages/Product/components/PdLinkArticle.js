import React from 'react'
import { Link } from 'react-router-dom'

function PdLinkArticle() {
  return (
    <>
      <div className="container-fluid py-5 my-5">
        <div className="row shop-article my-auto py-3">
          <div className="article-img col-12 col-md-4 mb-3 mb-md-0 p-3">
            <Link to="/kit">
              <img src="/img/Product/items001.jpg" alt="" />
            </Link>
          </div>
          <div className="article-info col-12 col-md-8 text-left pl-3 pl-md-4 py-3">
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
            <div className="btn-more ml-auto mt-auto">
              <Link to="/article">more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdLinkArticle
