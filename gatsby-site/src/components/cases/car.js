import React from "react"
import LabelCompany from "../305";
import CarDayTime from "../../videos/cases/car/day-time.mp4";
import Tags from "../tags";

const CaseCar = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel color-car">
                    <div className="cross-bar right"></div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h3>Roadtrip vibes.</h3>
                            <LabelCompany />
                            <p className="paragraph">
                                Unfortunately, I can not give away much about this project.
                            </p>
                            <Tags tags={["App design", "Animation", "Prototyping"]} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="iphone-panel">
                                <video autoPlay="autoplay" loop={true} muted src={CarDayTime}
                                       playsInline={true}/>
                                <div className="iphone-frame"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseCar;