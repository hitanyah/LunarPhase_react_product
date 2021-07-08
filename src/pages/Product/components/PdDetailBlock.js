import React from 'react'

// react-icon
import { FaRegBookmark } from 'react-icons/fa'

function PdDetailBlock() {
  return (
    <>
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
              <p className="item-tags my-auto mx-0"> 23 cm</p>
              <p className="item-tags my-auto mx-0"> Slim</p>
            </div>
            <div className="item-price-line d-flex justify-content-between align-items-center ">
              <div className="item-price">
                <p className="p-price my-auto">$ 70</p>
              </div>
              <button className="bookmark-add d-flex">
                <p className="underline my-auto ">
                  <FaRegBookmark /> + 加入收藏
                </p>
              </button>
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
                <button className="btn-option">12 pic</button>
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
    </>
  )
}

export default PdDetailBlock
