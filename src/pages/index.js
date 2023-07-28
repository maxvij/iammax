import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseWaterRower from "../components/cases/waterrower"
import CaseCoach from "../components/cases/coach"
import CaseBike from "../components/cases/bike"
import Contact from "../components/contact"
import Intro from "../components/intro"
import About from "../components/about"
import { Link } from "gatsby"
import IosArrowForward from "react-ionicons/lib/IosArrowForward"
import Tools from "../components/tools"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Product Designer" />
        <Intro />
        <section className="work">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Featured projects</h2>
                <p className="subtitle">The projects that I am most proud of</p>
              </div>
            </div>

            <CaseWaterRower />

            <CaseBike />

            <CaseCoach />

            <div className="row">
              <div className="col-12">
                <h2>There is more!</h2>
                <p className="subtitle">Browse through all my projects</p>
                <div className="btn-container relative center">
                  <Link
                    to="/projects"
                    className="btn btn-primary btn-icon btn-icon-right btn-animate-right"
                  >
                    <IosArrowForward />
                    View all projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Tools />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
