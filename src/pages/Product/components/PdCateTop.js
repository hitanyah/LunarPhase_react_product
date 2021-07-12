import React, { useState } from 'react'

import PdCateSelect from './PdCateSelect'
import PdCateSelectAll from './PdCateSelectAll'
import PdCateSelectCate from './PdCateSelectCate'

function PdCateTop() {
  const [selectCateId, setSelectCateId] = useState('0')

  // 設定選了哪個分類
  // const [cateOption, setCateOption] = useState(0)

  // 按鈕 on/off
  // 如何在點選其他按鈕時自動消除？
  // const [clicked, setClicked] = useState(false)

  // const btnDisplay = (selectBtn) => {
  //   if (selectBtn === 1) {
  //     return <PdCateSelect />
  //   } else if (selectBtn === 2) {
  //     return <PdCateSelectPD />
  //   } else {
  //     return <PdCateSelectAll />
  //   }
  // }

  return (
    <>
      <div className="product-category d-flex flex-column flex-sm-row justify-content-between py-0 px-0 px-lg-5">
        {/* <button
          onClick={() => setClicked(!clicked)}
          className={
            clicked ? 'pd-category-btn pd-category-selected' : 'pd-category-btn'
          }
        >
          熱門活動
        </button> */}
        <button
          onClick={() => setSelectCateId('1')}
          className="pd-category-btn"
        >
          衛生棉
        </button>
        <button
          onClick={() => setSelectCateId('2')}
          className="pd-category-btn"
        >
          衛生棉條
        </button>
        <button
          onClick={() => setSelectCateId('3')}
          className="pd-category-btn"
        >
          布衛生棉
        </button>
        <button
          onClick={() => setSelectCateId('4')}
          className="pd-category-btn"
        >
          月亮杯
        </button>

        <button
          onClick={() => setSelectCateId('5')}
          className="pd-category-btn"
        >
          生理褲
        </button>
        <button
          onClick={() => setSelectCateId('0')}
          className="pd-category-btn"
        >
          全部商品
        </button>
      </div>

      {/* {btnDisplay} */}

      {selectCateId === '0' && (
        <PdCateSelectAll setSelectCateId={setSelectCateId} />
      )}
      {selectCateId === '5' && (
        <PdCateSelect setSelectCateId={setSelectCateId} />
      )}
      {selectCateId === '1' && (
        <PdCateSelectCate setSelectCateId={setSelectCateId} />
      )}
      {selectCateId === '2' && (
        <PdCateSelectCate setSelectCateId={setSelectCateId} />
      )}
      {selectCateId === '3' && (
        <PdCateSelectCate setSelectCateId={setSelectCateId} />
      )}
      {selectCateId === '4' && (
        <PdCateSelectCate setSelectCateId={setSelectCateId} />
      )}
    </>
  )
}
export default PdCateTop
