import React, { useState, useEffect } from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function PdCateSelect() {
  const [cateFlow, setCateFlow] = useState([])

  async function getFlowFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3030/product/flow'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料

    setCateFlow(data)
  }

  useEffect(() => {
    getFlowFromServer()
  }, [])

  let ButtonTitle = 'TODO 抓子分類'

  let display = (
    <>
      <DropdownButton id="dropdownMenu1n" className="mx-3" title={ButtonTitle}>
        {cateFlow.length &&
          cateFlow.map((value, index) => {
            return (
              <>
                <Dropdown.Item href="#/action-3">
                  {value.flowName}
                </Dropdown.Item>
              </>
            )
          })}
      </DropdownButton>
    </>
  )

  return (
    <>
      <div className="product-category-sec text-center mx-auto">
        <div className="d-flex mx-auto justify-content-between py-3">
          {display}
        </div>
      </div>
    </>
  )
}

export default PdCateSelect
