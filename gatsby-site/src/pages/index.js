import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import CaseWaterRower from "../components/cases/waterrower";
import CaseCoach from "../components/cases/coach";
import CaseBike from "../components/cases/bike";
import CaseAutoSociaal from "../components/cases/edlink";
import CaseCar from "../components/cases/car";
import Contact from "../components/contact";

class IndexPage extends React.Component {
    render() {
        return <Layout>
            <SEO title="Home"/>
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>I'm Max.</h1>
                            <p className="subtitle">A versatile designer <br/>located in Groningen.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 offset-0 col-md-4 offset-md-4">
                            <div className="profile-avatar">
                                <img src={Max} alt="Me." loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>My work</h2>
                            <p className="subtitle">Take a look at my featured projects</p>
                        </div>
                    </div>

                    <CaseWaterRower />

                    <CaseBike />

                    <CaseCoach />

                    <CaseCar />

                    {/*<CaseSupporter />*/}

                    <CaseAutoSociaal />

                </div>
            </section>
            <Contact />
        </Layout>

    }
}

export default IndexPage
