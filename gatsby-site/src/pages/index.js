import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>

    </section>
    <h1>I'm Max.</h1>
    <h2>A versatile designer located in Groningen.</h2>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
