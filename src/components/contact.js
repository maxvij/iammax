import React from "react"
import Max from "../images/max-bw-square.png";
import IosArrowForward from "react-ionicons/lib/IosArrowForward"
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin"
import LogoTwitter from "react-ionicons/lib/LogoTwitter"

const Contact = (props) => {
    return (
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
                    <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="panel">
                                    <img src={Max} alt="Me." className="avatar" loading="lazy"/>
                                    <h3>Max van IJsselmuiden</h3>
                                    <p>Groningen, Netherlands</p>
                                    <div className="contact-container">
                                        <a href="https://www.linkedin.com/in/maxvanijsselmuiden/"
                                               target="_blank" rel="noreferrer"><LogoLinkedin /></a>
                                        <a href="https://www.twitter.com/maxvij" target="_blank" rel="noreferrer"><LogoTwitter /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="panel">
                                    <form id="contactForm"
                                          action="https://getform.io/f/20abbcd1-0d8c-4752-914c-226890f551be"
                                          method="POST">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input id="name" name="name" type="text"
                                                           className="form-control" placeholder="Barack"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="email">E-mail address</label>
                                                    <input id="email" name="email" type="email"
                                                           className="form-control" placeholder="b.obama@whitehouse.gov"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea id="message" name="message" className="form-control" placeholder="Hey Max! Long time no see."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="button-container">
                                                    <button type="submit"
                                                            className="btn btn-primary btn-icon btn-animate-right btn-icon-right btn-send">Send<IosArrowForward />
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
    )
}

export default Contact;