import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({siteTitle}) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{margin: 0}}>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
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
