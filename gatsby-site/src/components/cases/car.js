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
                        <div className="col-12 col-md-6">
                            <h3>Car industry project.</h3>
                            <LabelCompany/>
                            <Tags tags={["App design", "Animation", "Prototyping"]}/>
                            <p className="paragraph">
                                This project is yet to release and therefore I can not share as much as I would like to.
                                In this unnamed project I designed a mobile app for a company in the car industry. Of
                                the many views, flows, and animations that I made, the one animation I can show is displayed in the iPhone frame.
                            </p>
                            <p className="paragraph">
                                The animation stretches full-screen as it is the main view that the users will see when
                                using the app. Evidently, during daytime the daytime animation is displayed and at
                                nighttime the animation transitions to nighttime.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
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