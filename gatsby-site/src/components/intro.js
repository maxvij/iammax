import React from "react"
import Max from "../images/max-bw.png";

const Intro = (props) => {
    return (
        <section className="intro">
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-5">
                        <h1>Hi, I'm Max,</h1>
                        <p className="subtitle">
                            a creative <span>UX Designer</span>, specialized in <span>app design</span> and <span>animations</span>. <br />
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 offset-lg-3">
                        <div className="profile-avatar">
                            <img src={Max} alt="Me."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;