import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Tags from "../../components/tags";
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const CaseDetails = () => (
    <Layout>
        <SEO title="WaterRower Case"/>
        <div className="case-header color-supporter">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1">
                        <div className="intro">
                            <Link to="/" className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack />Go back</Link>
                            <h1>Support your amateur sport club.</h1>
                            <Tags tags={["App design", "Animation", "Prototyping", "Project management"]}/>
                            <p className="paragraph">
                                Similar to the car industry project, this project is yet to release. Therefore I can not
                                mention the name of the company that this app was designed for, nor show any more
                                details than the displayed video.
                            </p>
                            <LabelCompany/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="case">
            <div className="container">
            </div>
        </section>
    </Layout>
)

export default CaseDetails
