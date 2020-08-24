import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import Coach from "../images/coach.png"
import WaterRowerVideo from "../videos/wr-connect-intro.mp4"
import Bike from "../images/bike.png"

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
                            <h2>My work</h2>
                            <p className="subtitle">Take a look at my featured projects</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-waterrower">
                                <div className="cross-bar"> </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel waterrower-video">
                                            <video autoPlay="autoplay" loop={true} muted src={WaterRowerVideo} playsInline={true} />
                                            <div className="iphone-frame"> </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <h3>A refreshing home rowing experience.</h3>
                                        <p className="company">Project at Label305</p>
                                        <ul className="tags">
                                            <li>App design</li>
                                            <li>Animation</li>
                                            <li>Prototyping</li>
                                            <li>Ecosystem</li>
                                            <li>Project management</li>
                                        </ul>
                                        <p className="paragraph">
                                            The stylish rowing machines from <a href={''}>WaterRower</a> provide their customers with a unique experience. To further improve this experience, the WaterRower monitor can be connected to the WaterRower Connect app, turning a smartphone/tablet into a real-time performance monitor.
                                        </p>
                                        <p className="paragraph">
                                            For this project, I designed the WaterRower Connect application for phone, tablet (iOS and Android) and Apple Watch. A creative and refreshing user experience came to life.
                                            My personal goal for this project was to create a consistent flow throughout the application, providing a fluent and high-quality user experience.
                                        </p>
                                        <div className="btn-container">
                                            {/*<a className="btn btn-primary btn-video">Watch video</a>*/}
                                            <Link to="/cases/waterrower" className="btn btn-primary">View case</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-bike">
                                <div className="cross-bar right"> </div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <h3>Enhancing unique fitness devices.</h3>
                                        <p className="company">Project at Label305</p>
                                        <p className="paragraph">Similar to the rowing machines from WaterRower, the German company NOhRD designs unique fitness devices made out of wood. </p>
                                        <ul className="tags">
                                            <li>App design</li>
                                            <li>Animation</li>
                                            <li>Prototyping</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel nohrd-bike">
                                            <img src={Bike} title="Screenshot from the NOHrD Bike app." alt="Screenshot from the NOHrD Bike app."/>
                                            <div className="iphone-frame"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-coach">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="ipad-container">
                                            <div className="ipad-panel coach">
                                                <img src={Coach} title="Screenshot of the My-NOHrD environment."  alt="Screenshot of the My-NOHrD Environment."/>
                                                <div className="ipad-frame"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>In touch with a professional sports coach.</h3>
                                        <p className="company">Project at Label305</p>
                                        <ul className="tags">
                                            <li>Web design</li>
                                            <li>Animation</li>
                                            <li>Front-end development</li>
                                            <li>Back-end development</li>
                                            <li>React</li>
                                        </ul>
                                        <p className="paragraph">
                                        </p>
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
                            <p className="subtitle">Feel free to contact me anytime</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="margin"> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="panel">
                                        <img src={Max} className="avatar"/>
                                        <h3>Max van IJsselmuiden</h3>
                                        <p>Groningen, Netherlands</p>
                                        <ul className="contact">
                                            <li><a href="https://www.linkedin.com/in/maxvanijsselmuiden/" target="_blank">LinkedIn</a></li>
                                            <li><a href="https://www.twitter.com/maxvij" target="_blank">Twitter</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="panel">
                                        <form id="contactForm" action="https://getform.io/f/20abbcd1-0d8c-4752-914c-226890f551be" method="POST">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input id="name" name="name" type="text" className="form-control"  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email">E-mail address</label>
                                                        <input id="email" name="email" type="email" className="form-control"  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="message">Message</label>
                                                        <textarea id="message" name="message" className="form-control"  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="button-container">
                                                        <button type="submit" className="btn btn-primary btn-send">Send</button>
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
