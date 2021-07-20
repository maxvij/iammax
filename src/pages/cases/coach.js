import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Tags from "../../components/tags";
import Coach from "../../images/cases/coach/coach.jpg"
import Step1 from "../../images/cases/coach/step1.jpg"
import Step2 from "../../images/cases/coach/step2.jpg"
import Step3 from "../../images/cases/coach/step3.jpg"
import IosArrowBack from "react-ionicons/lib/IosArrowBack"
import Coach1 from "../../images/cases/coach/coach-1.jpg";

const CaseDetails = ({location}) => {
    const {state = {}} = location
    const {fromProjects} = state != null ? state : false
    return (
        <Layout>
            <SEO title="Coach Case"/>
            <div className="case-header color-coach large">
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
                            <div className="intro">
                                <Link to={fromProjects ? "/projects" : "/"}
                                      className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>Go
                                    back</Link>
                                <h1>Connect with a professional sports coach.</h1>
                                <Tags
                                    tags={["Web design", "Animation", "Front-end development", "Back-end development", "React"]}/>
                                <p className="paragraph">
                                    All NOHrD fitness devices make use of a similar ideology - enhancing the
                                    experience via digital workouts. The purpose of this application, NOHrD Coach,
                                    later named 'My-NOHrD', is to give users access to all the available digital
                                    content, matching their purchased devices.
                                </p>
                                <p className="paragraph">
                                    Besides the access to this digital content, the system allows users to get
                                    advice from a personal professional coach. After purchasing a subscription,
                                    users can request a personal coach. The coach will support the users in their
                                    sportive goals and recommend workouts based on their preferences.
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
                                        <p className="paragraph">For this project I was a designer, front-end developer
                                            and web developer. The goal of this project was to provide a 'all-in-one'
                                            web environment, suitable for customers of various NOHrD fitness devices.
                                            All applications of the NOHrD devices would feature specific sets of
                                            workouts, and in the 'My-NOHrD' environment, customers could register their
                                            device and create their own workouts, or navigate through pre-created
                                            workouts by NOHrD. </p>
                                        <p className="paragraph">Initially, I designed the dashboard, library, coach,
                                            devices, and settings environment. Sticking to the already existing NOHrD
                                            style (I had previously designed items for NOHrD applications), was
                                            essential to maintain consistency across the product line. After I was
                                            satisfied with the interface flow and the design, and the NOHrD team was
                                            satisfied as well - I started to develop the system. A team member of
                                            Label305 had already pre-build certain parts of the system, as for me, I did
                                            not have much experience in working with the <a href="https://laravel.com/" target="_blank" rel="noreferrer" title="Laravel - The PHP Framework for Web Artisans">Laravel framework</a>.</p>
                                        <p className="paragraph">The development of (parts of) the back-end went quite
                                            smoothly, although I was more 'comfortable' with the development of the
                                            front-end of the application. The dashboard is developed using the <a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React - A JavaScript library for building user interfaces">React
                                                framework</a>, to allow for responsive filtering of the fast available
                                            content. </p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <h3>Division of skills</h3>
                                        <div className="skills">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="title">Sketch</p>
                                                    <p className="description">Interface design</p>
                                                </div>
                                                <div className="col-12">
                                                    <div className="bar grade-3"></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="title">Front-end development</p>
                                                    <p className="description">HTML, CSS, SASS</p>
                                                </div>
                                                <div className="col-12">
                                                    <div className="bar grade-3"></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="title">Web development</p>
                                                    <p className="description">PHP, Laravel</p>
                                                </div>
                                                <div className="col-12">
                                                    <div className="bar grade-2"></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="title">React</p>
                                                    <p className="description">TypeScript</p>
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

                    <div className="row">
                        <div className="col-12">
                            <div className="case-details color-coach full-width">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>Designing for an ecosystem.</h2>
                                        <p className="paragraph">
                                            With all NOHrD products having an individual app, it makes sense to have
                                            consistency throughout these apps. In the Coach project, reusable interface
                                            elements have been designed; these elements are used in the various NOHrD
                                            apps,
                                            such as We-Row and <Link to="/cases/bike/">Bike</Link>.
                                        </p>
                                        <p className="paragraph">
                                        </p>
                                    </div>
                                </div>
                                <div className="row wide-bar color-coach">
                                    <div className="col-12 col-sm-10 offset-sm-1">
                                        <div className="ipad-panel no-radius">
                                            <img src={Coach} loading="lazy"
                                                 alt="Screenshot of the library view of the Coach system."/>
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
                                <img className="showoff" src={Coach1}
                                     alt="A collection of several fitness products by NOHrD."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="case-details full-width">
                                <h2>Request feedback from a professional.</h2>
                                <p className="paragraph">
                                    The advantage of the premium subscription of the Coach system is to have access to a
                                    professional coach. Users can request a personal coach by filling in a short form,
                                    in
                                    which they answer all questions that are relevant to the coach. Once a coach has
                                    been
                                    assigned to the form, the request will be reviewed. The first thing a coach will do
                                    to
                                    welcome the user to the premium subscription, is by setting up a workout that is
                                    tailored to the users needs.
                                </p>
                                <div className="step-container">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <img src={Step1} alt="Step 1"/>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img src={Step2} alt="Step 2"/>
                                        </div>
                                        <div className="col-12 col-md-4">
                                            <img src={Step3} alt="Step 3"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CaseDetails
