import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import CaseWaterRower from "../components/cases/waterrower";
import CaseCoach from "../components/cases/coach";
import CaseBike from "../components/cases/bike";
import CaseSupporter from "../components/cases/supporter";
import CaseAutoSociaal from "../components/cases/autosociaal";
import CaseCar from "../components/cases/car";

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

                    <CaseCoach />

                    <CaseCar />

                    <CaseSupporter />

                    <CaseBike />

                    <CaseAutoSociaal />

                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Get in touch.</h2>
                            <p className="subtitle">Feel free to contact me anytime</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="margin"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="panel">
                                        <img src={Max} className="avatar" loading="lazy"/>
                                        <h3>Max van IJsselmuiden</h3>
                                        <p>Groningen, Netherlands</p>
                                        <ul className="contact">
                                            <li><a href="https://www.linkedin.com/in/maxvanijsselmuiden/"
                                                   target="_blank">LinkedIn</a></li>
                                            <li><a href="https://www.twitter.com/maxvij" target="_blank">Twitter</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="panel">
                                        <form id="contactForm"
                                              action="https://getform.io/f/20abbcd1-0d8c-4752-914c-226890f551be"
                                              method="POST">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input id="name" name="name" type="text"
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email">E-mail address</label>
                                                        <input id="email" name="email" type="email"
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea id="message" name="message" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="button-container">
                                                        <button type="submit"
                                                                className="btn btn-primary btn-send">Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    }
}

export default IndexPage
