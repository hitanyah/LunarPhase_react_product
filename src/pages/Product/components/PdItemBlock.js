import React from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

function PdItemBlock(props) {
  const { itemSize, itemName, itemPrice } = props

  return (
    <>
      <div className="product-unit col-12 col-md-6 col-lg-4 mb-3">
        <div className="product-unit-img col-12">
          <Link to="">
            <img src="/img/Product/pad001.jpg" alt="" />
          </Link>
        </div>
        <div class="product-unit-hover">
          <button class="product-add">
            <FaBookmark />
          </button>
          <br />
          <button class="product-add">
            <FaShoppingCart />
          </button>
        </div>
        <div className="item-tag-box d-flex justify-content-between">
          <img className="item-tag-drop" src="/img/svg/drop03.svg" alt="" />
          <div className="item-tag-info">
            <p>{itemSize}</p>
          </div>
        </div>
        <div className="item-name text-left">
          <Link to="">
            <h5 className="h5-item">{itemName}</h5>
          </Link>
        </div>
        <div className="item-price text-left">
          <p className="p-price">${itemPrice}</p>
        </div>
      </div>
    </>
  )
}

export default PdItemBlock
