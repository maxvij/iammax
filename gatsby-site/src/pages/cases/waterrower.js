import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Intro from "../../videos/cases/waterrower/wr-connect-intro.mp4";
import Interval from "../../images/cases/waterrower/interval.png";
import Recommended from "../../images/cases/waterrower/recommended.png";
import Workout from "../../videos/cases/waterrower/wr-connect-workout.mp4";
import Settings from "../../videos/cases/waterrower/settings.mp4";
import Session from "../../images/cases/waterrower/session.png";
import Tags from "../../components/tags";

const CaseDetails = () => (
    <Layout>
        <SEO title="WaterRower Case"/>
        <div className="case-header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                        <h1>A refreshing home rowing experience.</h1>
                        <Tags tags={["App design", "Animation", "Prototyping", "Project management"]}/>
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
                        <LabelCompany/>
                    </div>
                </div>
            </div>
        </div>
        <section className="case">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="case-details color-waterrower">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="iphone-panel waterrower-video">
                                        <video autoPlay="autoplay" loop={true} muted src={Intro}
                                               playsInline={true}/>
                                        <div className="iphone-frame"></div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h2>Fluent onboarding.</h2>
                                    <p className="paragraph">
                                        I truly believe in the expression "first impressions are the most lasting".
                                        Therefore, I emphasize the importance of the onboarding process of the
                                        applications I design. A high-quality first set-up experience sets the standard
                                        for the application.
                                        These are the key features introduced in the onboarding to provide a fluent
                                        experience:
                                        <ul>
                                            <li>Auto-detection of closeby devices</li>
                                            <li>Allow for skipping of steps</li>
                                            <li>Log in via your Password manager</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="case-details color-waterrower right">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <h2>The user is in control.</h2>
                                    <p className="paragraph">
                                        In the simplest case, when setting up a workout, users have to select either a
                                        time or distance which they would like to row. The set-up of such a simple
                                        workout is therefore relatively easy. During the design process of this
                                        application I asked myself, "how can we make this more creative?".
                                    </p>
                                    <p className="paragraph">
                                        The solution I came up with is inspired by a cooking timer. When setting a
                                        cooking timer, you rotate and feel the tension build up in the timer. After
                                        letting the timer go, the knob slowly rotates back to its original position,
                                        hereby working as a timer.
                                    </p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="iphone-panel waterrower-video">
                                        <img src={Session}/>
                                        <div className="iphone-frame"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="case-details color-waterrower">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div className="iphone-panel waterrower-video">
                                        <video autoPlay="autoplay" loop={true} muted src={Workout}
                                               playsInline={true}/>
                                        <div className="iphone-frame"></div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h2>Track your progress.</h2>
                                    <p className="paragraph">
                                    </p>
                                    <p className="paragraph">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="case-details color-waterrower right">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <h2>Settings.</h2>
                                    <p className="paragraph">

                                    </p>
                                    <p className="paragraph">
                                    </p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="iphone-panel waterrower-video">
                                        <video autoPlay="autoplay" loop={true} muted src={Settings}
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
