/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import useDarkMode from "use-dark-mode";
import Header from "./header"
import IosArrowUp from "react-ionicons/lib/IosArrowUp"

// CSS imports
import "./sass/layout.css"
import "./sass/bootstrap.scss"
import "./sass/style.sass"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  function scrollUp() {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    if (top > 0) {
      window.scrollTo(0, top - 15)
      setTimeout(scrollUp, 1)
    }
  }

  const darkMode = useDarkMode(false);

  const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} darkMode={darkMode} handleTheme={handleTheme}/>
      <main>
        {children}
        <div className="container center">
          <div className="row">
            <div className="col-12">
              <a className="btn btn-move-top btn-icon btn-animate-up" onClick={scrollUp}><IosArrowUp />Back to top</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                © {new Date().getFullYear()}, Max van IJsselmuiden. Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
