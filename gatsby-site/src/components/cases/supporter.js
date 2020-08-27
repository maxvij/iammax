import React from "react"
import LabelCompany from "../305";
import Supporter from "../../videos/cases/sport/feed.mp4";

const CaseSupporter = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel color-supporter">
                    <div className="cross-bar"></div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="iphone-panel waterrower-video">
                                <video autoPlay="autoplay" loop={true} muted src={Supporter}
                                       playsInline={true}/>
                                <div className="iphone-frame"></div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h3>Support your amateur sport club.</h3>
                            <LabelCompany />
                            <ul className="tags">
                                <li>App design</li>
                                <li>Animation</li>
                                <li>Prototyping</li>
                            </ul>
                            <p className="paragraph">
                                Unfortunately, I can not mention the name of the company that this app was designed for.
                                The project has been discontinued, and the application never came to life.
                                Nevertheless, I am proud of the resulting design prototype after a creative design process.
                            </p>
                            <p className="paragraph">
                                The application would feature live scores of amateur football clubs, with a optional live stream of the match.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseSupporter;