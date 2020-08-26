import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import Coach from "../images/cases/coach/coach.png"
import Autosociaal from "../images/cases/autosociaal/dashboard.png"
import WaterRowerVideo from "../videos/cases/waterrower/wr-connect-intro.mp4"
import CarDayTime from "../videos/cases/car/day-time.mp4"
import Supporter from "../videos/cases/sport/feed.mp4"
import Bike from "../images/cases/bike/bike.png"

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
                                <div className="cross-bar"></div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel waterrower-video">
                                            <video autoPlay="autoplay" loop={true} muted src={WaterRowerVideo}
                                                   playsInline={true}/>
                                            <div className="iphone-frame"></div>
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
                                            The stylish rowing machines from <a href="https://www.waterrower.com/"
                                                                                target="_blank" rel="noreferrer"
                                                                                title="WaterRower.com">WaterRower</a> provide
                                            their customers with a unique experience. To further improve this
                                            experience, the WaterRower monitor can be connected to the WaterRower
                                            Connect app, turning a smartphone/tablet into a real-time performance
                                            monitor.
                                        </p>
                                        <p className="paragraph">
                                            For this project, I designed the WaterRower Connect application for phone,
                                            tablet (iOS and Android) and Apple Watch. My personal goal for this project
                                            was to create a consistent flow throughout the application, providing a
                                            fluent
                                            and high-quality user experience. The end result: a creative and refreshing
                                            user experience.
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
                            <div className="case-panel full-width color-coach">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="ipad-container">
                                            <div className="ipad-panel coach">
                                                <img src={Coach} title="Screenshot of the My-NOHrD environment."
                                                     alt="Screenshot of the My-NOHrD Environment."/>
                                                <div className="ipad-frame"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Connect with a professional sports coach.</h3>
                                        <p className="company">Project at Label305</p>
                                        <ul className="tags">
                                            <li>Web design</li>
                                            <li>Animation</li>
                                            <li>Front-end development</li>
                                            <li>Back-end development</li>
                                            <li>React</li>
                                        </ul>
                                        <p className="paragraph">
                                            All NOHrD fitness devices, such as described in other cases such as the NOHrD
                                            Bike and the WaterRower, make use of a similar ideology - enhancing the
                                            experience via digital workouts. The intent of this application, NOHrD Coach,
                                            later named 'My-NOHrD', is to give users access to all the available digital
                                            content, matching their purchased devices.
                                        </p>
                                        <p className="paragraph">
                                            Besides the access to this digital content, the system allows users to get
                                            advice from a personal professional coach. After purchasing a subscription,
                                            users can request a personal coach. The coach will support the users in their
                                            sportive goals and recommend workouts based on their preferences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-bike">
                                <div className="cross-bar right"></div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <h3>Cycling through the mountains at home.</h3>
                                        <p className="company">Project at Label305</p>
                                        <p className="paragraph">Similar to the rowing machines from WaterRower, the
                                            German company <a href="https://www.nohrd.com/" target="_blank" rel="noreferrer"
                                               title="NOHrD.com">NOHrD</a> designs unique fitness devices using high-quality materials. To extend the
                                            cycling experience with digital possibilities, their indoor cycling device,
                                            the NOHrD Bike, allows for mounting of a smartphone or tablet. </p>
                                        <p className="paragraph">
                                            When I was designing the NOHrD Bike app I wanted to 'do something different',
                                            and focused on creating animation-based interactions throughout the application.
                                        </p>
                                        <ul className="tags">
                                            <li>App design</li>
                                            <li>Animation</li>
                                            <li>Prototyping</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel nohrd-bike">
                                            <img src={Bike} title="Screenshot from the NOHrD Bike app."
                                                 alt="Screenshot from the NOHrD Bike app."/>
                                            <div className="iphone-frame"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-supporter">
                                <div className="cross-bar"></div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel waterrower-video">
                                            <video autoPlay="autoplay" loop={true} muted src={Supporter}
                                                   playsInline={true}/>
                                            <div className="iphone-frame"></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <h3>Support your amateur sport club.</h3>
                                        <p className="company">Project at Label305</p>
                                        <ul className="tags">
                                            <li>App design</li>
                                            <li>Animation</li>
                                            <li>Prototyping</li>
                                        </ul>
                                        <p className="paragraph">
                                            Unfortunately, I can not mention the name of the company that this app was designed for.
                                            The project has been discontinued, and the application never came to life.
                                            Nevertheless, I am proud of the resulting design prototype after a creative design process.
                                        </p>
                                        <p className="paragraph">
                                            The application would feature live scores of amateur football clubs, with a optional live stream of the match.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-autosociaal">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="macbook-container">
                                            <div className="macbook-panel autosociaal">
                                                <img src={Autosociaal} title="Screenshot of the Autosociaal environment."
                                                     alt="Screenshot of the Autosociaal environment."/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Car garages management software.</h3>
                                        <p className="company">Project at Label305</p>
                                        <ul className="tags">
                                            <li>Web design</li>
                                            <li>Animation</li>
                                            <li>Front-end development</li>
                                            <li>Back-end development</li>
                                        </ul>
                                        <p className="paragraph"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="case-panel color-car">
                                <div className="cross-bar right"></div>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <h3>Roadtrip vibes.</h3>
                                        <p className="company">Project at Label305</p>
                                        <p className="paragraph">
                                            Unfortunately, I can not give away much about this project.
                                        </p>
                                        <ul className="tags">
                                            <li>App design</li>
                                            <li>Animation</li>
                                            <li>Prototyping</li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel">
                                            <video autoPlay="autoplay" loop={true} muted src={CarDayTime}
                                                   playsInline={true}/>
                                            <div className="iphone-frame"></div>
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
                                        <img src={Max} className="avatar"/>
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
