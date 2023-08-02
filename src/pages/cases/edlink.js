import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305"
import Tags from "../../components/tags"
import Dash from "../../images/cases/autosociaal/dashboard.png"
import Match from "../../images/cases/autosociaal/matches.png"
import DataInControl from "../../images/cases/autosociaal/customers-filter.png"
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const CaseDetails = ({ location }) => {
  const { state = {} } = location
  const { fromProjects } = state != null ? state : false
  return (
    <Layout>
      <SEO title="Edlink Case" />
      <div className="case-header color-edlink">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
              <div className="intro">
                <Link
                  to={fromProjects ? "/projects" : "/"}
                  className="btn btn-primary btn-icon btn-animate-left"
                >
                  <IosArrowBack />
                  {fromProjects ? "All projects" : "Go back"}
                </Link>
                <h1>Smart customer management for car dealers.</h1>
                <Tags
                  tags={[
                    "Web design",
                    "Animation",
                    "Front-end development",
                    "Back-end development",
                  ]}
                />
                <p className="paragraph">
                  A system where 'all things come together'. EdLink is a
                  customer data platform that can link several car dealer
                  management systems to achieve a complete database of the
                  customers of a car dealer. The system makes the most of the
                  available data, by suggesting which duplicate customers can be
                  combined into a single customer, keeping an overview of the
                  available leads for each customer and suggesting when to
                  message a customer for a possible new lead.
                </p>
                <p className="paragraph">
                  It was a challenge to design this project from scratch. For
                  me, the most difficult aspect of this project was to visualize
                  the extremely large amount of relevant information into an
                  optimized, useful dashboard.
                </p>
                <LabelCompany />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="case">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details full-width">
                <div className="row">
                  <div className="col-12">
                    <h2>Powerful yet structured.</h2>
                    <p className="paragraph">
                      The range of functionalities make the EdLink system
                      extremely powerful. It is a great challenge to give users
                      of the system an idea of the system status at a glance,
                      for a system that can display so much relevant
                      information. The top 5 columns of the dashboard provide a
                      quick overview of the system status. After having used the
                      system for a short while, users should quickly learn where
                      to look for the desired information.
                    </p>
                  </div>
                </div>
                <div className="row wide-bar color-edlink">
                  <div className="col-12 col-md-10 offset-md-1">
                    <div className="ipad-panel no-radius">
                      <img
                        src={Dash}
                        loading="lazy"
                        alt="Screenshot of the dashboard view of the Edlink system."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="case-details full-width">
                <div className="row">
                  <div className="col-12">
                    <h2>Smart matching of customers.</h2>
                    <p className="paragraph">
                      When linking multiple customer management systems, there
                      will always be duplicates. EdLink automatically recognizes
                      duplicate metadata of customers, and allows the
                      administrator of the system to merge this metadata
                      together. The intuitive interface displayed below
                      emphasizes the differences between the two found files.
                      After selecting the correct fields the data can be merged,
                      previewing the resulting metadata before executing.
                    </p>
                  </div>
                </div>
                <div className="row wide-bar color-edlink">
                  <div className="col-12 col-md-10 offset-md-1">
                    <div className="ipad-panel no-radius">
                      <img
                        src={Match}
                        loading="lazy"
                        alt="Screenshot of the 'matches' view of the Edlink system."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="case-details full-width">
                <div className="row">
                  <div className="col-12">
                    <h2>Quick access to the information you need.</h2>
                    <p className="paragraph">
                      EdLink allows for advanced filtering of the available
                      data. By creating custom filters, any desired set of
                      customers can be found. This is great for data management,
                      but even greater for market targeting. A specific set of
                      customers could be suited for a lead; these customers can
                      be send a message suggesting them if the car dealer can be
                      of help to them.
                    </p>
                  </div>
                </div>
                <div className="row wide-bar color-edlink">
                  <div className="col-12 col-md-10 offset-md-1">
                    <div className="ipad-panel no-radius">
                      <img
                        src={DataInControl}
                        loading="lazy"
                        alt="Screenshot of the filter options of the Edlink system."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="programs-container">
                <h2>Used tools and programs</h2>
                <div className="programs">
                  <div className="row">
                    <div className="col-4">
                      <div className="program">
                        <span className="icon adobe-xd"></span>
                        Adobe XD
                        <br />
                        <span className="description">Wireframing</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="program">
                        <div className="icon adobe-ps"></div>
                        Photoshop
                        <br />
                        <span className="description">Visuals</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="program">
                        <div className="icon affinity"></div>
                        Affinity Designer
                        <br />
                        <span className="description">Artwork</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CaseDetails
