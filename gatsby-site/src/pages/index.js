import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CaseWaterRower from "../components/cases/waterrower";
import CaseCoach from "../components/cases/coach";
import CaseBike from "../components/cases/bike";
import CaseAutoSociaal from "../components/cases/edlink";
import CaseCar from "../components/cases/car";
import Contact from "../components/contact";
import Intro from "../components/intro";

class IndexPage extends React.Component {
    render() {
        return <Layout>
            <SEO title="Home"/>
            <Intro />
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
