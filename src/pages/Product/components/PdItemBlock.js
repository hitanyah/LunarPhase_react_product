import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

function PdItemBlock(props) {
  const [bookmark, setBookmark] = useState(false)

  const {
    itemId,
    itemSize,
    flowImg,
    itemName,
    itemPrice,
    optionName,
    itemCoverImg,
  } = props

  return (
    <>
      <div className="product-unit col-12 col-md-6 col-lg-4 mb-3">
        <div className="product-unit-img col-12">
          <Link to={`/product-detail/${itemId}`}>
            <img src={`/img/Product/${itemCoverImg}`} alt="" />
          </Link>
        </div>
        <div class="product-unit-hover">
          <button
            onClick={() => setBookmark(!bookmark)}
            class={bookmark ? 'product-add product-added' : 'product-add'}
          >
            <FaBookmark />
          </button>
          <br />
          <button class="product-add">
            <FaShoppingCart />
          </button>
        </div>
        <div className="item-tag-box d-flex justify-content-between">
          <img
            className="item-tag-drop"
            src={`/../img/svg/${flowImg}`}
            alt=""
          />
          <div className="item-tag-info">
            <p>{itemSize}</p>
          </div>
        </div>
        <div className="item-name text-left">
          <Link to={`/product-detail/${itemId}`}>
            <h5 className="h5-item">{itemName}</h5>
          </Link>
        </div>
        <div className="item-price text-left d-flex justify-between">
          <p className="p-price">$ {itemPrice}</p>
          <p className="btn-option small my-auto ml-auto px-1">{optionName}</p>
        </div>
      </div>
    </>
  )
}

export default PdItemBlock
