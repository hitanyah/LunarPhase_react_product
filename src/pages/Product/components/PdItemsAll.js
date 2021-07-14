import React, { useEffect, useState } from 'react'
import PdItemBlock from './PdItemBlock'

function PdItemsAll(props) {
  const { cateIdPa } = props
  const catePa = cateIdPa
  const [products, setProducts] = useState([])
  //   const [dataLoading, setDataLoading] = useState(false)
  //   const [page, setPage] = useState(1)

  async function getPoductFromServer(params = {}) {
    // 開啟載入指示
    // setDataLoading(true)

    // 現在頁數
    // let pageUrl = `?page=${params.page}`

    // 連接的伺服器資料網址
    const url = 'http://localhost:3030/product/'
    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setProducts(data)
  }

  useEffect(() => {
    getPoductFromServer({ catePa })
  }, [])

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setDataLoading(false)
  //     }, 1000)
  //   }, [products])

  //列出頁數陣列
  let pageArray = Array.from(Array(products.totalPages).keys())
  console.log(pageArray)

  //   const loading = (
  //     <>
  //       <div className="d-flex justify-content-center">
  //         <div className="spinner-border" role="status">
  //           {/* <span className="sr-only">Loading...</span> */}
  //         </div>
  //       </div>
  //     </>
  //   )

  const display = (
    <>
      <div className="row product-content flex-column">
        <div className="row product-unit-wrap">
          {products.perPage &&
            products.data.map((value, index) => {
              return (
                <>
                  <PdItemBlock
                    itemId={value.itemId}
                    itemSize={value.itemSize}
                    itemCoverImg={value.itemCoverImg}
                    flowImg={[value.flowImg]}
                    itemName={value.itemName}
                    itemPrice={value.itemPrice}
                    optionName={value.optionName}
                  />
                </>
              )
            })}
        </div>
        {/* page switch */}
        <div className="product-unit-page mt-5">
          <div className="btn-group" role="group" aria-label="Basic example">
            <p>{cateIdPa}xx</p>
            <button
              onClick={() => {
                const page = products.page - 1
                getPoductFromServer({ page })
              }}
              type="button"
              className={1 === products.page ? 'btn disabled' : 'btn'}
            >
              &lt; PREV
            </button>
            {pageArray.map((i) => {
              const page = i + 1
              return (
                <>
                  <button
                    onClick={() => {
                      getPoductFromServer({ page })
                    }}
                    type="button"
                    className="btn"
                  >
                    {page}
                  </button>
                </>
              )
            })}

            <button
              onClick={() => {
                const page = products.page + 1
                getPoductFromServer({ page })
              }}
              type="button"
              className={
                products.totalPages === products.page ? 'btn disabled' : 'btn'
              }
            >
              NEXT &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {display}
      {/* {dataLoading ? loading : display} */}
    </>
  )
}

export default PdItemsAll
