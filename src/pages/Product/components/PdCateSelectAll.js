import React from 'react'

function PdCateSelectAll(props) {
  return (
    <>
      <div className="product-category-sec text-center mx-auto">
        <div className="d-flex mx-auto justify-content-between py-3">
          <div className="dropdown product-dropdown">
            <button
              className="btn-border-s dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              選擇類別ALL
            </button>
            <div
              className="dropdown-menu product-dropdown-menu"
              aria-labelledby="dropdownMenu1"
            >
              <button className="dropdown-item" type="button">
                日用
              </button>
              <button className="dropdown-item" type="button">
                夜用
              </button>
              <button className="dropdown-item" type="button">
                護墊
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PdCateSelectAll
