import PropTypes from "prop-types"
import React from "react"
import DarkModeToggle from "./darkmodetoggle";
import { Link } from "gatsby";

const Header = ({handleTheme, darkMode}) => (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <Link to="/"><h1 style={{margin: 0}}>
                        Max <span>van IJsselmuiden</span>
                    </h1></Link>
                </div>
                <div className="col-4">
                    <DarkModeToggle darkMode={darkMode} onClick={handleTheme}/>
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
