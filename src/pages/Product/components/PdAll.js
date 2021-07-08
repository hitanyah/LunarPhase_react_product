import React from 'react'

import PdItemBlock from './PdItemBlock'

function PdAll(props) {
  const { products, setProducts, value } = props

  return (
    <>
      <div className="row product-content flex-column">
        <div className="row product-unit-wrap">
          {products.length &&
            products.map((value, index) => {
              return (
                <PdItemBlock
                  itemName={value.itemSize}
                  price={value.itemSize}
                  itemsize={value.itemSize}
                />
              )
            })}
        </div>
        <div className="product-unit-page mt-5">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn ">
              &lt; PREV
            </button>
            <button type="button" className="btn ">
              1
            </button>
            <button type="button" className="btn ">
              NEXT &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdAll
