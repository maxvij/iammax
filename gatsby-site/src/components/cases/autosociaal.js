import React from "react"
import Autosociaal from "../../images/cases/autosociaal/dashboard.png";
import LabelCompany from "../305";

const CaseAutoSociaal = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel color-autosociaal">
                    <div className="row">
                        <div className="col-12">
                            <div className="macbook-container">
                                <div className="macbook-panel autosociaal">
                                    <img src={Autosociaal} title="Screenshot of the Autosociaal environment."
                                         alt="Screenshot of the Autosociaal environment."/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3>Car garages management software.</h3>
                            <LabelCompany />
                            <ul className="tags">
                                <li>Web design</li>
                                <li>Animation</li>
                                <li>Front-end development</li>
                                <li>Back-end development</li>
                            </ul>
                            <p className="paragraph"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseAutoSociaal;