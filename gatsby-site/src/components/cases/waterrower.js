import React from "react"
import WaterRowerVideo from "../../videos/cases/waterrower/wr-connect-intro.mp4";
import IosArrowForward from "react-ionicons/lib/IosArrowForward"
import LabelCompany from "../305";
import {Link} from "gatsby";
import Tags from "../tags";

const CaseWaterRower = (props) => {
    return (
        <div className="row has-bar color-waterrower">
            <div className="col-12">
                <div className="case-panel color-waterrower">
                    <div className="cross-bar"></div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="iphone-panel waterrower-video">
                                <video autoPlay="autoplay" loop={true} muted src={WaterRowerVideo}
                                       playsInline={true} loading="lazy"/>
                                <div className="iphone-frame"></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>A refreshing rowing experience.</h3>
                            <LabelCompany />
                            <Tags tags={["App design", "Animation", "Prototyping", "Project management"]} />
                            <p className="paragraph">
                                The stylish rowing machines from <a href="https://www.waterrower.com/"
                                                                    target="_blank" rel="noreferrer"
                                                                    title="WaterRower.com">WaterRower</a> provide
                                their customers with a unique experience. To further improve this
                                experience, the WaterRower monitor can be connected to the WaterRower
                                Connect app, turning a smartphone/tablet into a real-time performance
                                monitor.
                            </p>
                            <p className="paragraph">
                                For this project, I designed the WaterRower Connect application for phone,
                                tablet (iOS and Android) and Apple Watch. My personal goal for this project
                                was to create a consistent flow throughout the application, providing a
                                fluent
                                and high-quality user experience. The end result: a creative and refreshing
                                user experience.
                            </p>
                            <div className="btn-container">
                                <Link to="/cases/waterrower" className="btn btn-primary btn-icon btn-icon-right btn-animate-right"><IosArrowForward />View case</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseWaterRower;