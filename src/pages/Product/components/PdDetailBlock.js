import React, { useState } from 'react'
import Swal from 'sweetalert2'

// react-icon
import { FaRegBookmark } from 'react-icons/fa'

function PdDetailBlock(props) {
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
  const {
    itemId,
    itemName,
    itemCoverImg,
    itemImg,
    itemSize,
    flowName,
    flowImg,
    itemPrice,
    itemDescription,
    optionName,
  } = props

  const [qty, setQty] = useState(1)
  const [bookmark, setBookmark] = useState(false)
  const [changeImg, setChangImg] = useState(itemCoverImg)

  // alert
  const alertCheck = () => {
    Swal.fire({
      position: 'center',
      // icon: 'question',
      width: '30%',
      imageUrl: '/img/svg/1103-confetti-outline.gif',
      title: '已加入購物車',
      showConfirmButton: false,
      timer: 1500,
    })
  }
  // const alertMark = () => {
  //   Swal.fire({
  //     position: 'center',
  //     // icon: 'question',
  //     width: '30%',
  //     imageUrl: '/img/svg/43-music-note-outline.gif',
  //     title: '已加入收藏',
  //     showConfirmButton: false,
  //     timer: 1500,
  //   })
  // }

  // 把多圖路徑字串變成陣列
  // console.log(itemImg)
  const mutiImgArray = itemImg.split(',')
  // console.log(mutiImgArray)

  return (
    <>
      <div className="container-fluid">
        <div className="item-row row justify-content-between">
          <div className="item-pic-wrap d-flex col-12 col-md-6">
            <div className="item-pic-select col-2 mx-2 p-0 ">
              <button
                onClick={() => setChangImg(itemCoverImg)}
                className="item-pic-select-dot mb-3 p-0"
              >
                <img src={`/img/Product/${itemCoverImg}`} alt="" />
              </button>
              {mutiImgArray.length &&
                mutiImgArray.map((value, index) => {
                  return (
                    <>
                      <button
                        onClick={() => setChangImg(value)}
                        className="item-pic-select-dot mb-3 p-0"
                      >
                        <img src={`/img/Product/${value}`} alt="" />
                      </button>
                    </>
                  )
                })}
            </div>
            <div className="item-pic">
              <img src={`/img/Product/${changeImg}`} alt="" />
            </div>
          </div>
          <div className="item-info-wrap text-left col-12 col-md-6 mt-5 mt-md-0 pl-md-5">
            <div className="item-name mb-3">
              <h5 className="h5-item-l">{itemName}</h5>
            </div>
            <div className="item-tag d-flex">
              <img
                className="item-drop mr-2"
                src={`/../img/svg/${flowImg}`}
                alt=""
              />
              <p className="item-tags my-auto mx-0"> {itemSize}</p>
              <p className="item-tags my-auto mx-0"> {flowName}</p>
            </div>
            <div className="item-price-line d-flex justify-content-between align-items-center ">
              <div className="item-price">
                <p className="p-price my-auto">$ {itemPrice}</p>
              </div>
              <button
                className={
                  bookmark
                    ? 'item-bookmark-add item-bookmark-added d-flex'
                    : 'item-bookmark-add d-flex'
                }
              >
                <p
                  onClick={() => setBookmark(!bookmark)}
                  className="my-auto mx-0"
                >
                  <FaRegBookmark /> + 加入收藏
                </p>
              </button>
            </div>
            <div className="item-detail">
              <h6>特色</h6>
              <div className="item-detail-content mb-0 pd-0">
                <p
                  className=" small"
                  dangerouslySetInnerHTML={{ __html: itemDescription }}
                ></p>
              </div>
            </div>
            <div className="item-style d-flex justify-content-between">
              <h6>規格</h6>
              <div className="item-style-tag">
                <p className="btn-option p-1 m-0">{optionName}</p>
              </div>
            </div>
            <div className="item-qty d-flex justify-content-between">
              <h6 className>數量</h6>
              <div className="item-qty-input input-group">
                <div className="input-group-btn">
                  <button
                    onClick={() => setQty(qty - 1)}
                    className={qty === 1 ? 'btn disablede' : 'btn'}
                    type="button"
                    id="qty-sub"
                  >
                    -
                  </button>
                </div>
                <input type="text" className="form-control" placeholder={qty} />
                <div className="input-group-btn">
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="btn"
                    type="button"
                    id="qty-add"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="add-cart col-12 pl-md-5">
              <button
                onClick={() => {
                  updateCartToLocalStorage({
                    id: itemId, //傳itemId
                    name: itemName,
                    amount: qty, //傳Qty
                    price: itemPrice,
                  })
                  alertCheck()
                }}
                className="btn-border-l"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdDetailBlock
