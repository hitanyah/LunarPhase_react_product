import React, { useState } from 'react'

import PdCateSelect from './PdCateSelect'
import PdCateSelectAll from './PdCateSelectAll'

function PdCateTop() {
  const [selectBtn, setSelectBtn] = useState('PdCateSelectAll')
  const [clicked, setClicked] = useState(false)

  const clickCheck = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className="product-category d-flex flex-column flex-sm-row justify-content-between py-0 px-0 px-lg-5">
        <button
          onChange={clickCheck}
          className={
            clicked
              ? 'pd-category-btn .pd-category-selected'
              : 'pd-category-btn'
          }
        >
          熱門活動
        </button>
        <button className="pd-category-btn">衛生棉</button>
        <button className="pd-category-btn">布衛生棉</button>
        <button className="pd-category-btn">衛生棉條</button>
        <button className="pd-category-btn">月亮杯</button>
        <button
          onClick={() => setSelectBtn('PdCateSelect')}
          className="pd-category-btn"
        >
          生理褲
        </button>
        <button
          onClick={() => setSelectBtn('PdCateSelectAll')}
          className="pd-category-btn"
        >
          全部商品
        </button>
      </div>
      {selectBtn === 'PdCateSelectAll' && (
        <PdCateSelectAll setSelectBtn={setSelectBtn} />
      )}
      {selectBtn === 'PdCateSelect' && (
        <PdCateSelect setSelectBtn={setSelectBtn} />
      )}
    </>
  )
}
export default PdCateTop
