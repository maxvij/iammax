import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IosArrowBack from "react-ionicons/lib/IosArrowBack";
import CaseAutoSociaal from "../components/cases/edlink";
import CaseCar from "../components/cases/car";
import CaseSupporter from "../components/cases/supporter";
import CaseBike from "../components/cases/bike";
import CaseWaterRower from "../components/cases/waterrower";
import CaseCoach from "../components/cases/coach";

const Projects = () => (
    <Layout>
        <SEO title="My projects"/>
        <section className="work">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>All projects</h2>
                        <p className="subtitle">An overview of all projects</p>
                        <Link to="/" className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>Go back</Link>
                    </div>
                </div>

                <CaseAutoSociaal fromProjects={true} />

                <CaseCar fromProjects={true} />

                <CaseSupporter fromProjects={true} />

                <CaseCoach fromProjects={true} />

                <CaseBike fromProjects={true} />

                <CaseWaterRower fromProjects={true} />

                <div className="row">
                    <div className="col-12">
                        <div className="margin">{` `}</div>
                        <div className="margin">{` `}</div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Projects
