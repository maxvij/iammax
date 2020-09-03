import React from "react"
import Max from "../images/max-bw.png";
import IosCloudDownload from "react-ionicons/lib/IosCloudDownload"

const About = (props) => {
    return (
        <section className="about-me">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>About me</h2>
                        <p className="subtitle">Who am I?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="panel">
                            <div className="profile-avatar-container">
                                <div className="profile-avatar">
                                    <img src={Max} alt="Me."/>
                                </div>
                            </div>
                            <h3>Max van IJsselmuiden</h3>
                            <p className="subtitle">UX Designer</p>
                            <p className="paragraph center">
                                I am an enthusiastic, creative and to-the-point designer. Design has always been my
                                passion and throughout the years this passion has converged into digital interface
                                design. My experience has transformed me into a confident, fully-fledged UX Designer,
                                ready to take on new challenges.
                            </p>
                            <div className="btn-container center">
                                <a href="http://www.maxvanijsselmuiden.nl/downloads/Max-van-IJsselmuiden-CV.pdf" download="http://www.maxvanijsselmuiden.nl/downloads/Max-van-IJsselmuiden-CV.pdf" className="btn btn-center btn-primary btn-icon btn-animate-down"><IosCloudDownload />Download resumé</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="panel skills">
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Adobe XD</p>
                                    <p className="description">Rapid prototyping, interface design</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">9</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-9"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Front-end development</p>
                                    <p className="description">HTML, CSS, SASS/SCSS, React, JavaScript</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">9</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-9"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Adobe After Effects</p>
                                    <p className="description">Micro-interactions, animations</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">8</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-8"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Adobe Photoshop</p>
                                    <p className="description">Graphic design, interface design, visuals</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">8</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-8"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Adobe Premiere</p>
                                    <p className="description">Video editing</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">8</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-8"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <p className="title">Usability Testing</p>
                                    <p className="description">User tests, prototype testing</p>
                                </div>
                                <div className="col-4">
                                    <p className="grade">7</p>
                                </div>
                                <div className="col-12">
                                    <div className="bar grade-7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;