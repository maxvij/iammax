import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Sunrise from "./sunrise";
import Sunset from "./sunset";

const Header = ({siteTitle, handleTheme}) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-10">
          <h1 style={{margin: 0}}>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="col-2">
          <Sunrise onClick={handleTheme} />
          <Sunset onClick={handleTheme} />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
