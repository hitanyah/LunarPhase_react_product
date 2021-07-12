import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

function PdItemBlock(props) {
  // By CART
  const [mycart, setMycart] = useState([])
  const [productName, setProductName] = useState('') // 加入購物車會跳出的訊息，不使用可省略

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')

      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
  }

  //
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
          <button
            onClick={() => {
              updateCartToLocalStorage({
                id: itemId, //傳itemId
                name: itemName,
                amount: 1, //傳Qty
                price: itemPrice,
              })
            }}
            class="product-add"
          >
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
