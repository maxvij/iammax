import React from "react"
import LabelCompany from "../305";
import Bike from "../../images/cases/bike/bike.png";
import Tags from "../tags";

const CaseBike = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel color-bike">
                    <div className="cross-bar right"></div>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h3>Cycling through the mountains at home.</h3>
                            <LabelCompany />
                            <p className="paragraph">Similar to the rowing machines from WaterRower, the
                                German company <a href="https://www.nohrd.com/" target="_blank" rel="noreferrer"
                                                  title="NOHrD.com">NOHrD</a> designs unique fitness devices using high-quality materials. To extend the
                                cycling experience with digital possibilities, their indoor cycling device,
                                the NOHrD Bike, allows for mounting of a smartphone or tablet. </p>
                            <p className="paragraph">
                                When I was designing the NOHrD Bike app I wanted to 'do something different',
                                and focused on creating animation-based interactions throughout the application.
                            </p>
                            <Tags tags={["App design", "Animation", "Prototyping"]} />
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="iphone-panel nohrd-bike">
                                <img src={Bike} title="Screenshot from the NOHrD Bike app."
                                     alt="Screenshot from the NOHrD Bike app."/>
                                <div className="iphone-frame"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseBike;