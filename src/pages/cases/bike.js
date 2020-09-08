import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import LabelCompany from "../../components/305";
import Tags from "../../components/tags";
import Intro from "../../images/cases/bike/intro.png"
import Pacer from "../../images/cases/bike/pacer.png"
import History from "../../images/cases/bike/history.png"
import ShowOff from "../../images/cases/bike/wide-showoff.png"
import IosArrowBack from "react-ionicons/lib/IosArrowBack"

const CaseDetails = ({location}) => {
    const {state = {}} = location
    const {fromProjects} = state != null ? state : false
    return (
        <Layout>
            <SEO title="Bike Case"/>
            <div className="case-header large color-bike">
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-0 col-sm-12 offset-sm-0 col-md-10 offset-md-1">
                            <div className="intro">
                                <Link to={fromProjects ? "/projects" : "/"}
                                      className="btn btn-primary btn-icon btn-animate-left"><IosArrowBack/>{fromProjects ? "All projects" : "Go back"}</Link>
                                <h1>Cycling through the mountains at home.</h1>
                                <Tags tags={["App design", "Animation", "Prototyping"]}/>
                                <p className="paragraph">
                                    Similar to the rowing machines from WaterRower, the
                                    German company <a href="https://www.nohrd.com/" target="_blank" rel="noreferrer"
                                                      title="NOHrD.com">NOHrD</a> designs unique fitness devices using
                                    high-quality materials. To extend the
                                    cycling experience with digital possibilities, their indoor cycling device,
                                    the NOHrD Bike, allows for mounting of a smartphone or tablet.
                                </p>
                                <p className="paragraph">
                                    When I was designing the NOHrD Bike app I wanted to 'do something different',
                                    and focused on creating animation-based interactions throughout the application.
                                </p>
                                <LabelCompany/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="case">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-lg-12 offset-lg-0">
                            <div className="showoff-container">
                                <img className="showoff" src={ShowOff} alt="Several screenshots of the Bike app."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="case-details color-bike">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel">
                                            <div className="iphone-frame"></div>
                                            <img src={Intro} loading="lazy"
                                                 alt="Screenshot of the pacer view of the Bike app."/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <h2>Something different.</h2>
                                        <p className="paragraph">
                                            The combination of the phone/tablet app and the NOHrD Bike provides an
                                            experience that is truly special. I wanted to create unique interface
                                            elements
                                            for the app, reflecting the high-quality standards that the NOHrD company
                                            has
                                            set for their products.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-details color-bike right">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <h2>Control your pace.</h2>
                                        <p className="paragraph">
                                            The pacer UI element in the NOHrD Bike app guides users to cycle at a
                                            specific
                                            pace. The colour of the interface element directly displays how far off the
                                            pace
                                            the user is. Workouts can contain parts, allowing for switching of pace over
                                            time. When switching to a new part, with a new pace, the interface briefly
                                            highlights the new target speed.
                                        </p>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="iphone-panel">
                                            <div className="iphone-frame"></div>
                                            <img src={Pacer} loading="lazy"
                                                 alt="Screenshot of the History view of the Bike app."/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="case-details color-bike full-width">
                                <div className="row">
                                    <div className="col-12">
                                        <h2>Stay motivated.</h2>
                                        <p className="paragraph">
                                            Gamification elements such as <i>achievements</i> and <i>trends</i> are
                                            great
                                            motivators for users to continue using the app. These elements are very
                                            common
                                            in sports-related applications and have shown to do their job.
                                        </p>
                                    </div>
                                </div>
                                <div className="row wide-bar color-bike">
                                    <div className="col-12 col-sm-10 offset-sm-1">
                                        <div className="ipad-panel no-radius">
                                            <img src={History} loading="lazy"
                                                 alt="Screenshot of the intro view of the Bike app."/>
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
}

export default CaseDetails
