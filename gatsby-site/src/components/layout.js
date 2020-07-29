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

  const darkMode = useDarkMode(false);

  const handleTheme = theme => theme === "dark" ? darkMode.enable() : darkMode.disable();

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} darkMode={darkMode} handleTheme={handleTheme}/>
      <main>{children}</main>
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
