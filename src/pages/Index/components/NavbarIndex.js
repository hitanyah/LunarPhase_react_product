import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

function NavbarIndex() {
  const [sticky, setSticky] = useState(false)

  const navbarSticky = () => {
    if (window.scrollY >= window.innerHeight) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  window.addEventListener('scroll', navbarSticky)

  return (
    <>
      <nav id="navbar" className={sticky ? 'nav-bar sticky' : 'nav-bar'}>
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className="col-4 d-flex justify-content-center">
            <Link to="/">
              <h1>
                <img
                  className="nav-logo"
                  src="/img/Index/logo-s-dark.svg"
                  alt="Lunar_Phase"
                />
              </h1>
            </Link>
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end ">
            <div className="mt-2">
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2 mt-2">
              <a className="mx-0" href>
                <FaUser />
              </a>
              <div />
            </div>
            <div className="ml-2 mt-2">
              <a className="mx-0" href>
                <FaBookmark />
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
              <Link to="/product">PRODUCT</Link>
            </li>
            <li>
              <Link to="/article">ARTICLE</Link>
            </li>
            <li>
              <Link to="/kit">KIT</Link>
            </li>
            <li>
              <Link to="/event">EVENT</Link>
            </li>
            <li>
              <Link to="#join-us">JOIN US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavbarIndex
