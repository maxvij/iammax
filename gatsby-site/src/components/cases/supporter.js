import React from "react"
import LabelCompany from "../305";
import Supporter from "../../videos/cases/sport/feed.mp4";
import Tags from "../tags";

const CaseSupporter = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel color-supporter">
                    <div className="cross-bar"></div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="iphone-panel waterrower-video">
                                <video autoPlay="autoplay" loop={true} muted src={Supporter}
                                       playsInline={true}/>
                                <div className="iphone-frame"></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>Support your amateur sport club.</h3>
                            <LabelCompany/>
                            <Tags tags={["App design", "Animation", "Prototyping"]}/>
                            <p className="paragraph">
                                Similar to the car industry project, this project is yet to release. Therefore I can not
                                mention the name of the company that this app was designed for, nor show any more
                                details than the displayed video.
                            </p>
                            <p className="paragraph">
                                The application would feature live scores of amateur football clubs, with a optional
                                live stream of the match.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseSupporter;