import React from 'react'

// react-icon
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'

function Navbar() {
  return (
    <>
      <footer>
        <div className="footer-box text-center">
          <a href>
            <img
              className="footer-logo"
              src="/img/svg/logo-m-dark.svg"
              alt="lunar_phase"
            />
          </a>
          <div className="footer-sns mt-3">
            <a className="mx-2" href>
              <GrFacebookOption />
            </a>
            <a className="mx-2" href>
              <GrInstagram />
            </a>
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
