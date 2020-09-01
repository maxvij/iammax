import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Tags from "../../components/tags";
import Coach from "../../images/cases/coach/coach.png"
import Step1 from "../../images/cases/coach/step1.png"
import Step2 from "../../images/cases/coach/step2.png"
import Step3 from "../../images/cases/coach/step3.png"
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const CaseDetails = () => (
    <Layout>
        <SEO title="Coach Case"/>
        <div className="case-header color-coach">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
                        <div className="intro">
                            <Link to="/" className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>Go
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
                        <div className="case-details color-coach full-width">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Designing for an ecosystem.</h2>
                                    <p className="paragraph">
                                        With all NOHrD products having an individual app, it makes sense to have
                                        consistency throughout these apps. In the Coach project, reusable interface
                                        elements have been designed; these elements are used in the various NOHrD apps,
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
                <div className="row">
                    <div className="col-12">
                        <div className="case-details full-width">
                            <h2>Request feedback from a professional.</h2>
                            <p className="paragraph">
                                The advantage of the premium subscription of the Coach system is to have access to a
                                professional coach. Users can request a personal coach by filling in a short form, in
                                which they answer all questions that are relevant to the coach. Once a coach has been
                                assigned to the form, the request will be reviewed. The first thing a coach will do to
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

                <div className="row">
                    <div className="col-12">
                        <div className="programs-container">
                            <h2>Used tools and programs</h2>
                            <div className="programs">
                                <div className="row">
                                    <div className="col-6 col-sm-3">
                                        <div className="program">
                                            <span className="icon adobe-xd"></span>
                                            Adobe XD<br/>
                                            <span className="description">Wireframing</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <div className="program">
                                            <div className="icon adobe-ae"></div>
                                            After Effects<br/>
                                            <span className="description">Animations</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <div className="program">
                                            <div className="icon adobe-ps"></div>
                                            Photoshop<br/>
                                            <span className="description">Visuals</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <div className="program">
                                            <div className="icon affinity"></div>
                                            Affinity Designer<br/>
                                            <span className="description">Artwork</span>
                                        </div>
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

export default CaseDetails
