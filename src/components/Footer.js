import React from 'react'
import { Link } from 'react-router-dom'

// react-icon
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

function Navbar() {
  return (
    <>
      <footer>
        <div className="footer-box text-center">
          <Link to="/">
            <img
              className="footer-logo"
              src="/img/svg/logo-m-dark.svg"
              alt="lunar_phase"
            />
          </Link>
          <div className="footer-sns mt-3">
            <Link to="/" className="mx-2" href>
              <GrFacebookOption />
            </Link>
            <Link to="/" className="mx-2">
              <GrInstagram />
            </Link>
          </div>
          <div className="footer-copyright">
            <p className="small">Copyright © JSMART All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Navbar
