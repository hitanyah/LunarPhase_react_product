import React from 'react'

// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

function Navbar() {
  return (
    <>
      <nav id="navbar" className="nav-bar sticky">
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className="col-4 d-flex justify-content-center">
            <a href>
              <h1>
                <img
                  className="nav-logo"
                  src="/img/Index/logo-s-dark.svg"
                  alt="Lunar_Phase"
                />
              </h1>
            </a>
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end ">
            <div className="mt-2">
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2 mt-2">
              <a className="mx-0" href>
                <i className="fas fa-user" />
              </a>
              <div />
            </div>
            <div className="ml-2 mt-2">
              <a className="mx-0" href>
                <FaUser />
              </a>
              <p className="small mx-0 mb-2">(0)</p>
            </div>
            <div className="ml-2 mt-2">
              <a className="mx-0" href>
                <FaShoppingCart />
              </a>
              <p className="small mx-0 mb-2">(0)</p>
            </div>
          </div>
        </div>
        <div className="nav-bar-bottom">
          <ul className="d-flex justify-content-around col-11 mx-auto mt-1">
            <li>
              <a href="#product">PRODUCT</a>
            </li>
            <li>
              <a href="#article">ARTICLE</a>
            </li>
            <li>
              <a href="#kit">KIT</a>
            </li>
            <li>
              <a href="#event">EVENT</a>
            </li>
            <li>
              <a href="#join-us">JOIN US</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
