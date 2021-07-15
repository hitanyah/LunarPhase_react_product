import React, { useState, useEffect } from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function PdCateSelectCate(props) {
  // const { selectCateId } = props

  const [cateOption, setCateOption] = useState([])

  async function getCateOptionFromServer() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:4567/product/category-select/1'
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

    setCateOption(data)
  }

  useEffect(() => {
    getCateOptionFromServer()
  }, [cateOption])

  // console.log('dataaa', cateOption)
  // console.log('dataaa', cateOption[0].categoryNameParent)
  let ButtonTitle = '分類名稱'
  // let ButtonTitle = cateOption[0].categoryNameParent

  // let ButtonTitle = '衛生棉'

  let display = (
    <>
      <DropdownButton id="dropdownMenu1n" className="mx-3" title={ButtonTitle}>
        {cateOption.length &&
          cateOption.map((value, index) => {
            return (
              <>
                <Dropdown.Item>{value.categoryName}</Dropdown.Item>
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

export default PdCateSelectCate
