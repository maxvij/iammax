import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Intro from "../../videos/cases/waterrower/wr-connect-intro.mp4";
import Workout from "../../videos/cases/waterrower/wr-connect-workout.mp4";
import Settings from "../../videos/cases/waterrower/settings.mp4";
import Session from "../../images/cases/waterrower/session.png";
import ShowOff from "../../images/cases/waterrower/wide-showoff.png"
import WR1 from "../../images/cases/waterrower/wr-1.jpg"
import WR2 from "../../images/cases/waterrower/wr-2.jpg"
import Tags from "../../components/tags";
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const CaseDetails = ({location}) => {
    const {state = {}} = location
    const {fromProjects} = state != null ? state : false
    return (<Layout>
        <SEO title="WaterRower Case"/>
        <div className="case-header large waterrower">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1">
                        <div className="intro">
                            <Link to={fromProjects ? "/projects" : "/"}
                                  className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>{fromProjects ? "All projects" : "Go back"}
                            </Link>
                            <h1>A refreshing rowing experience.</h1>
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
        </div>
        <section className="case">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="role-panel">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <h3>My role in this project</h3>
                                    <p className="paragraph">In this project, I was the lead designer for the iOS and
                                        Android apps for
                                        WaterRower (phone and tablet). The goal of the project was to provide customers
                                        of the WaterRower rowing machines with a mobile application that improves the
                                        general user experience of the product. The application should be an extension
                                        to the existing physical monitor, which handles all the data that comes from the
                                        rowing machine.</p>
                                    <p className="paragraph">I was given a style guide by WaterRower UK and started the
                                        ideation process based
                                        upon this document. After I had established the main wireframes of the
                                        application, I created several prototypes of the 'knob' interaction, a common
                                        interaction in this application. I tested each prototype with the team and
                                        learned what the best option would be. </p>
                                    <p className="paragraph">Following, I extended the prototype and started shaping the
                                        actual UI
                                        elements. After the initial weeks I had designed a initial flow of the
                                        application,
                                        which would eventually turn out to be a good basis for the application. Over
                                        time, in collaboration with the team, new features were thought of - for which I
                                        repeated the usual design processes.</p>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <h3>Division of skills</h3>
                                    <div className="skills">
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="title">Adobe XD</p>
                                                <p className="description">Rapid prototyping, interface design</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="bar grade-5"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="title">Adobe After Effects</p>
                                                <p className="description">Micro-interactions, animations</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="bar grade-2"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="title">Android development (front-end)</p>
                                                <p className="description">Creating layouts and interactions</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="bar grade-1"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="title">Usability Testing</p>
                                                <p className="description">User tests, prototype testing</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="bar grade-1"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p className="title">Project Management</p>
                                                <p className="description">Problem-solving, decision making</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="bar grade-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    </p>
                                    <ul>
                                        <li>Auto-detection of closeby devices</li>
                                        <li>Allow for skipping of steps</li>
                                        <li>Log in via your Password manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
                        <div className="showoff-container">
                            <img className="showoff" src={ShowOff} alt="Several screenshots of the WaterRower app."/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
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
                                        application I asked myself "how can we make this more creative?".
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
                                        <img src={Session} loading="lazy"
                                             alt="Session view of the WaterRower Connect app."/>
                                        <div className="iphone-frame"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
                        <div className="showoff-container">
                            <img className="showoff" src={WR2}
                                 alt="WaterRower photo from WaterRowerBenelux on Flickr."/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
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
                                        The app allows users to track their sportive activities, by indicating the
                                        progress in a single workout, and simultaneously providing the option to view
                                        progress over multiple workouts. The difference in split times of a workout can
                                        best be transferred visually, as can be seen in the video close by.
                                    </p>
                                    <p className="paragraph">
                                        Moreover, the app allows users to customize <i>what</i> and <i>when</i> they
                                        would like to track. The app makes it easy to keep track of your weight, workout
                                        intensity, or any custom variable over time. If desired, a custom note can be
                                        added to each workout as well.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="case-details color-waterrower right">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <h2>Privacy first.</h2>
                                    <p className="paragraph">
                                        The new GDPR rules are a important factor, and have to be taken into account
                                        when designing and building applications. In the WaterRower app, users can
                                        request deletion of the stored data. Besides this, the amount of data that is
                                        stored is minimized as well. If the data is not relevant for the user, there is
                                        no need to save it.
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
    </Layout>)
}

export default CaseDetails
