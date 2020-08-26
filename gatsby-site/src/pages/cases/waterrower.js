import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const CaseDetails = () => (
    <Layout>
        <SEO title="WaterRower Case" />
        <div className="case-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>WaterRower</h1>
                        <p className="subtitle">Case details</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="case">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link to="/">Go back</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default CaseDetails
