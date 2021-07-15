import React from 'react'
import { Link } from 'react-router-dom'

function PdLinkKit() {
  return (
    <>
      <div className="container-fluid py-5 my-5">
        <div className="row shop-article my-auto py-3">
          <div className="article-img col-12 col-md-4 mb-3 mb-md-0 p-3">
            <Link to="/kit">
              <img src="/img/Product/items004.jpg" alt="" />
            </Link>
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
              <Link to="/kit">more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdLinkKit
