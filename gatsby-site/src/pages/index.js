import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import Confetti from "react-confetti"

class IndexPage extends React.Component {
    render() {
        const colors = [
            '#6FBFA2',
            '#A61723'
        ]

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
                        <div className="col-md-6 offset-md-3 col-sm-12 offset-sm-0">
                            <div className="profile-avatar">
                                <img src={Max} alt="Me."/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>My work.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Get in touch.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    }
}

export default IndexPage
