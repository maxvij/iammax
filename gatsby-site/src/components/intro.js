import React from "react"
import Max from "../images/max-bw.png";
import Lottie from "react-lottie";

const Intro = (props) => {
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

    return (
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
    )
}

export default Intro;