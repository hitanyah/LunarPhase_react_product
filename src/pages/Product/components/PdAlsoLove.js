import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function PdAlsoLove() {
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
  const [picks, setPicks] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  //alert
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

  async function getPickFromServer() {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:4567/product/ranking/3'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setPicks(data)
    console.log(picks.length)
  }

  useEffect(() => {
    getPickFromServer()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }, [picks])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="row pick-unit-wrap">
        {picks.length &&
          picks.map((value, index) => {
            return (
              <>
                <div className=" flex-column pick-unit col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                  <div className="pick-unit-img">
                    <a href={`/product-detail/${value.itemId}`}>
                      <img src={`/img/Product/${value.itemCoverImg}`} alt="" />
                    </a>
                  </div>
                  <div className="item-name mb-0">
                    <Link to={`/product-detail/${value.itemId}`}>
                      <h5 className="h5-item">{value.itemName}</h5>
                    </Link>
                  </div>
                  <div className="item-price">
                    <p className="p-price my-0">$ {value.itemPrice}</p>
                  </div>
                  <button
                    onClick={() => {
                      updateCartToLocalStorage({
                        id: `${value.itemId}`, //傳itemId
                        name: `${value.itemName}`,
                        amount: 1, //傳Qty
                        price: `${value.itemPrice}`,
                      })
                      alertCheck()
                    }}
                    className="btn-border-s mx-auto mt-4"
                  >
                    加入購物車
                  </button>
                </div>
              </>
            )
          })}
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default PdAlsoLove
