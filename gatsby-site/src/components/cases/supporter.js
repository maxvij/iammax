import React from "react"
import LabelCompany from "../305";
import Supporter from "../../videos/cases/sport/feed.mp4";
import Tags from "../tags";
import {Link} from "gatsby";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

const CaseSupporter = (props) => {
    return (
        <div className="row has-bar color-supporter">
            <div className="col-12">
                <div className="case-panel color-supporter">
                    <div className="cross-bar"></div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="iphone-panel">
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
                            {/*<div className="btn-container">*/}
                            {/*    <Link to="/cases/supporter" className="btn btn-primary btn-icon btn-icon-right btn-animate-right"><IosArrowForward />View case</Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseSupporter;