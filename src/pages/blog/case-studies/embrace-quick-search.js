import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import LabelCompany from "../../../components/305"
import Tags from "../../../components/tags"
import History from "../../../images/cases/bike/history.png"
import ShowOff from "../../../images/cases/bike/wide-showoff.png"
import IosArrowBack from "react-ionicons/lib/IosArrowBack"
import Bike2 from "../../../images/cases/bike/bike-2.jpg"
import Bike3 from "../../../images/cases/bike/bike-3.jpg"

const BlogArticle = ({ location }) => {
  const { state = {} } = location
  const { fromProjects } = state != null ? state : false
  return (
    <Layout>
      <SEO title="Case Study for Embrace: Quick Search" />
      <div className="case-header large color-bike">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
              <div className="intro">
                <Link
                  to="/"
                  className="btn btn-primary btn-icon btn-animate-left"
                >
                  <IosArrowBack />
                  Go back
                </Link>
                <h1>Find what you need, when you need it.</h1>
                <Tags tags={["Animation", "Prototyping"]} />
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Fermentum iaculis eu non diam phasellus vestibulum lorem sed
                  risus. Quisque sagittis purus sit amet volutpat consequat
                  mauris nunc. Venenatis urna cursus eget nunc scelerisque
                  viverra mauris in. Senectus et netus et malesuada. Tellus
                  mauris a diam maecenas sed enim ut. Ac tincidunt vitae semper
                  quis lectus nulla at volutpat diam. Venenatis cras sed felis
                  eget. Tellus rutrum tellus pellentesque eu tincidunt tortor.
                  Eget est lorem ipsum dolor. Maecenas volutpat blandit aliquam
                  etiam. Amet est placerat in egestas erat imperdiet sed. Eu
                  volutpat odio facilisis mauris sit. Habitant morbi tristique
                  senectus et.
                </p>
                <p className="paragraph">
                  Volutpat ac tincidunt vitae semper. Blandit turpis cursus in
                  hac habitasse platea dictumst quisque. Neque egestas congue
                  quisque egestas. Posuere lorem ipsum dolor sit amet
                  consectetur adipiscing elit duis. Senectus et netus et
                  malesuada. Purus ut faucibus pulvinar elementum integer enim
                  neque volutpat ac. Hendrerit dolor magna eget est lorem ipsum
                  dolor sit. Scelerisque fermentum dui faucibus in ornare quam
                  viverra. Commodo viverra maecenas accumsan lacus vel. Pulvinar
                  mattis nunc sed blandit. Ultrices vitae auctor eu augue ut
                  lectus arcu.
                </p>
                <LabelCompany />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="case">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
              <div className="showoff-container">
                <img
                  className="showoff"
                  src={ShowOff}
                  alt="Several screenshots of the Bike app."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details color-bike">
                <div className="row">
                  <div className="col-12">
                    <h2>Something different.</h2>
                    <p className="paragraph">
                      Turpis cursus in hac habitasse platea dictumst quisque.
                      Mauris nunc congue nisi vitae. Neque volutpat ac tincidunt
                      vitae semper. Facilisis magna etiam tempor orci eu. Nisi
                      lacus sed viverra tellus in hac habitasse. Egestas
                      fringilla phasellus faucibus scelerisque eleifend.
                      Maecenas ultricies mi eget mauris pharetra et ultrices.
                      Neque volutpat ac tincidunt vitae semper. Egestas maecenas
                      pharetra convallis posuere. Euismod lacinia at quis risus.
                      Pellentesque massa placerat duis ultricies lacus sed. Arcu
                      cursus vitae congue mauris rhoncus aenean vel elit. Nisl
                      suscipit adipiscing bibendum est. Mattis ullamcorper velit
                      sed ullamcorper morbi. Proin fermentum leo vel orci porta.
                      Egestas sed tempus urna et pharetra pharetra. Est ante in
                      nibh mauris.
                    </p>
                    <ul>
                      <li>A</li>
                      <li>B</li>
                      <li>C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
              <div className="showoff-container">
                <img
                  className="showoff"
                  src={Bike2}
                  alt="The NOHrD Bike from NOHrD."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="case-details color-bike right">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h2>Control your pace.</h2>
                    <p className="paragraph">
                      Turpis cursus in hac habitasse platea dictumst quisque.
                      Mauris nunc congue nisi vitae. Neque volutpat ac tincidunt
                      vitae semper. Facilisis magna etiam tempor orci eu. Nisi
                      lacus sed viverra tellus in hac habitasse. Egestas
                      fringilla phasellus faucibus scelerisque eleifend.
                      Maecenas ultricies mi eget mauris pharetra et ultrices.
                      Neque volutpat ac tincidunt vitae semper. Egestas maecenas
                      pharetra convallis posuere. Euismod lacinia at quis risus.
                      Pellentesque massa placerat duis ultricies lacus sed. Arcu
                      cursus vitae congue mauris rhoncus aenean vel elit. Nisl
                      suscipit adipiscing bibendum est. Mattis ullamcorper velit
                      sed ullamcorper morbi. Proin fermentum leo vel orci porta.
                      Egestas sed tempus urna et pharetra pharetra. Est ante in
                      nibh mauris.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="case-details color-bike full-width">
                <div className="row">
                  <div className="col-12">
                    <h2>Stay motivated.</h2>
                    <p className="paragraph">
                      Gamification elements such as <i>achievements</i> and{" "}
                      <i>trends</i> are great motivators for users to continue
                      using the app. These elements are very common in
                      sports-related applications and have shown to do their
                      job.
                    </p>
                  </div>
                </div>
                <div className="row wide-bar color-bike">
                  <div className="col-12 col-sm-10 offset-sm-1">
                    <div className="ipad-panel no-radius">
                      <img
                        src={History}
                        loading="lazy"
                        alt="Screenshot of the intro view of the Bike app."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
              <div className="showoff-container">
                <img
                  className="showoff"
                  src={Bike3}
                  alt="The NOHrD Bike from NOHrD."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogArticle
