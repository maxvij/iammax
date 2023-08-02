import React from "react"
import LabelCompany from "../305"
import Coach from "../../images/cases/coach/coach.jpg"
import Tags from "../tags"
import { Link } from "gatsby"
import IosArrowForward from "react-ionicons/lib/IosArrowForward"

const CaseCoach = props => {
  return (
    <div className="row has-bar color-coach right">
      <div className="col-12">
        <div className="case-panel full-width color-coach">
          <div className="row">
            <div className="col-12">
              <div className="ipad-container">
                <div className="ipad-panel coach">
                  <img
                    src={Coach}
                    title="Screenshot of the My-NOHrD environment."
                    alt="Screenshot of the My-NOHrD Environment."
                    loading="lazy"
                  />
                  <div className="ipad-frame"></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h3>Connect with a professional sports coach.</h3>
              <LabelCompany />
              <Tags
                tags={[
                  "Web design",
                  "Animation",
                  "Front-end development",
                  "Back-end development",
                  "React",
                ]}
              />
              <p className="paragraph">
                All NOHrD fitness devices, such as described in other cases such
                as the NOHrD Bike and the WaterRower, make use of a similar
                ideology - enhancing the experience via digital workouts. The
                intent of this application is to give users access to all the
                available digital content, matching their purchased devices.
              </p>
              <div className="btn-container">
                <Link
                  to="/cases/coach"
                  state={{ fromProjects: props.fromProjects }}
                  className="btn btn-primary btn-icon btn-icon-right btn-animate-right"
                >
                  <IosArrowForward />
                  View case
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseCoach
