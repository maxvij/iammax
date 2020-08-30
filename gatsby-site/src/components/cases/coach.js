import React from "react"
import LabelCompany from "../305";
import Coach from "../../images/cases/coach/coach.png";
import Tags from "../tags";
import {Link} from "gatsby";
import IosArrowForward from "react-ionicons/lib/IosArrowForward";

const CaseCoach = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="case-panel full-width color-coach">
                    <div className="row">
                        <div className="col-12">
                            <div className="ipad-container">
                                <div className="ipad-panel coach">
                                    <img src={Coach} title="Screenshot of the My-NOHrD environment."
                                         alt="Screenshot of the My-NOHrD Environment." loading="lazy"/>
                                    <div className="ipad-frame"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3>Connect with a professional sports coach.</h3>
                            <LabelCompany />
                            <Tags tags={["Web design", "Animation", "Front-end development", "Back-end development", "React"]} />
                            <p className="paragraph">
                                All NOHrD fitness devices, such as described in other cases such as the NOHrD
                                Bike and the WaterRower, make use of a similar ideology - enhancing the
                                experience via digital workouts. The intent of this application, NOHrD Coach,
                                later named 'My-NOHrD', is to give users access to all the available digital
                                content, matching their purchased devices.
                            </p>
                            <p className="paragraph">
                                Besides the access to this digital content, the system allows users to get
                                advice from a personal professional coach. After purchasing a subscription,
                                users can request a personal coach. The coach will support the users in their
                                sportive goals and recommend workouts based on their preferences.
                            </p>
                            <div className="btn-container">
                                <Link to="/cases/coach" className="btn btn-primary btn-icon btn-icon-right btn-animate-right"><IosArrowForward />View case</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseCoach;