import React from "react"
import Autosociaal from "../../images/cases/autosociaal/dashboard.png";
import LabelCompany from "../305";
import Tags from "../tags";
import {Link} from "gatsby";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

const CaseAutoSociaal = (props) => {
    return (
        <div className="row has-bar color-edlink">
            <div className="col-12">
                <div className="case-panel color-edlink">
                    <div className="row">
                        <div className="col-12">
                            <div className="macbook-container">
                                <div className="macbook-panel autosociaal">
                                    <img src={Autosociaal} title="Screenshot of the Autosociaal environment."
                                         alt="Screenshot of the Autosociaal environment." loading="lazy"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3>Smart customer management for car dealers.</h3>
                            <LabelCompany/>
                            <Tags tags={["Web design", "Animation", "Front-end development", "Back-end development"]}/>
                            <p className="paragraph">
                                A system where 'all things come together'. EdLink is a customer data platform that can
                                link several car dealer management systems to achieve a complete database of the
                                customers of a car dealer. The system makes the most of the available data, by
                                suggesting which duplicate customers can be combined into a single customer, keeping an
                                overview of the available leads for each customer and suggesting when to message a
                                customer for a possible new lead.
                            </p>
                            <div className="btn-container">
                                <Link to="/cases/edlink" className="btn btn-primary btn-icon btn-icon-right btn-animate-right"><IosArrowForward />View case</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseAutoSociaal;