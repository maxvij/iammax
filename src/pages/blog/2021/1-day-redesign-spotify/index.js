import React from "react"
import {Link} from "gatsby"

import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"
import LabelCompany from "../../../../components/305";
import Tags from "../../../../components/tags";
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const BlogPage = ({location}) => {
    const {state = {}} = location
    const {fromProjects} = state != null ? state : false
    return (
        <Layout>
            <SEO title="1-day redesign: Spotify"/>
            <div className="case-header large color-spotify">
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
                            <div className="intro">
                                <Link to={fromProjects ? "/projects" : "/"}
                                      className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>{fromProjects ? "All projects" : "Go back"}</Link>
                                <h1>1-day redesign: Spotify music streaming app.</h1>
                                <Tags tags={["App design", "Animation", "Prototyping"]}/>
                                <p className="paragraph">
                                    T.b.c.
                                </p>
                                <LabelCompany/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="case">
                <p>To be continued.</p>
            </section>
        </Layout>
    )
}

export default BlogPage
