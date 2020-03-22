import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <section className="intro">
      <h1>I'm Max.</h1>
      <p className="subtitle">A versatile designer located in Groningen.</p>
      <div className="profile-avatar">
        <img src={Max} />
      </div>
    </section>
    <section>
        <h2>My work.</h2>
    </section>
  </Layout>
)

export default IndexPage
