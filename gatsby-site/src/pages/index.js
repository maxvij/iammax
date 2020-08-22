import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import WaterRowerVideo from "../videos/wr-connect-intro.mp4"

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
                            <div className="case-panel">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel waterrower-video">
                                            <video autoPlay="autoplay" loop={true} muted src={WaterRowerVideo} playsinline={true} />
                                            <div className="iphone-frame"> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <h3>A refreshing home rowing experience.</h3>
                                        <p className="company">Project at Label305</p>
                                        <p className="paragraph">
                                            The stylish rowing machines from <a href={''}>WaterRower</a> provide their customers with a unique experience. To further improve this experience, the WaterRower monitor can be connected to the WaterRower Connect app, turning a smartphone/tablet into a real-time performance monitor.
                                        </p>
                                        <p className="paragraph">
                                            For this project, I designed the WaterRower Connect application for phone, tablet (iOS and Android) and Apple Watch. A creative and refreshing user experience came to life.
                                            My personal goal for this project was to create a consistent flow throughout the application, providing a fluent and high-quality user experience.
                                        </p>
                                        <div className="btn-container">
                                            {/*<a className="btn btn-primary btn-video">Watch video</a>*/}
                                            <a className="btn btn-secondary" href="https://305.nl/en/portfolio/waterrower-connect-apps/" target="_blank" title="Label305 - Case: Apps for WaterRower">View case at 305.nl</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
