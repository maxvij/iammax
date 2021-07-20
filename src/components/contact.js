import React from "react"
import Max from "../images/max-bw-square.webp";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"

const Contact = (props) => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Get in touch.</h2>
                        <p className="subtitle">Feel free to contact me anytime on LinkedIn</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="margin"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="row">
                            <div className="col-12 col-md-6 offset-md-3">
                                <div className="panel">
                                    <img src={Max} alt="Me." className="avatar" loading="lazy"/>
                                    <h3>Max van IJsselmuiden</h3>
                                    <p>Groningen, Netherlands</p>
                                    <div className="contact-container">
                                        <a href="https://www.linkedin.com/in/maxvanijsselmuiden/"
                                               target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn profile"><LogoLinkedin /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;