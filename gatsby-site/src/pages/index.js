import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Max from "../images/max-bw.png"
import CaseWaterRower from "../components/cases/waterrower";
import CaseCoach from "../components/cases/coach";
import CaseBike from "../components/cases/bike";
import CaseAutoSociaal from "../components/cases/edlink";
import CaseCar from "../components/cases/car";
import Contact from "../components/contact";
import Lottie from "react-lottie";

class IndexPage extends React.Component {
    render() {
        const introAnim = {
            loop: true,
            autoplay: true,
            animationData: require('../animations/Intro.json'),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        const introAnimDark = {
            loop: true,
            autoplay: true,
            animationData: require('../animations/Intro-white.json'),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return <Layout>
            <SEO title="Home"/>
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>I'm Max.</h1>
                            <div className="animation-wrapper">
                                <div className="anim-light">
                                    <Lottie options={introAnim}
                                            height={117}
                                            width={384}
                                    />
                                </div>
                                <div className="anim-dark">
                                    <Lottie options={introAnimDark}
                                            height={117}
                                            width={384}
                                    />
                                </div>
                            </div>
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

                    <CaseWaterRower />

                    <CaseBike />

                    <CaseCoach />

                    <CaseCar />

                    {/*<CaseSupporter />*/}

                    <CaseAutoSociaal />

                </div>
            </section>
            <Contact />
        </Layout>

    }
}

export default IndexPage
