import React, { useState, useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function PdCateSelectAll(props) {
  const [cateFlow, setCateFlow] = useState([])
  // const [changeFlow, setchangeFlow] = useState(0)

  async function getFlowFromServer() {
    // 連接的伺服器資料網址
    let url = 'http://localhost:4567/product/flow'

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

    setCateFlow(data)
  }

  useEffect(() => {
    getFlowFromServer()
  }, [])

  let display = (
    <>
      <DropdownButton
        id="dropdownMenu1n"
        className="custom-btn mx-3"
        title="依流量選擇"
      >
        {cateFlow.length &&
          cateFlow.map((value, index) => {
            return (
              <>
                <Dropdown.Item>{value.flowName}</Dropdown.Item>
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

export default PdCateSelectAll
