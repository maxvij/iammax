import React from "react"
import LetsCodeVideo from "../../videos/cases/letscode/logo.mp4"
import IosArrowForward from "react-ionicons/lib/IosArrowForward"
import { Link } from "gatsby"
import Tags from "../tags"

const CaseLetsCode = props => {
  return (
    <div className="row has-bar color-letscode">
      <div className="col-12">
        <div className="case-panel color-letscode">
          <div className="cross-bar"></div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="iphone-panel letscode-video">
                <video
                  autoPlay="autoplay"
                  loop={true}
                  muted
                  src={LetsCodeVideo}
                  playsInline={true}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h3>Learn programming in a fun way.</h3>
              <Tags tags={["Branding", "Animation", "Logo"]} />
              <p className="paragraph">
                "Let's Code" is an initiative dedicated to making programming
                education an enjoyable experience. In this case, we will focus
                on a pivotal aspect of their journey: the creation of their logo
                and branding.
              </p>
              <p className="paragraph">
                "Let's Code" mission is to provide workshops that teach
                programming in a fun and engaging way, and their logo and
                branding play a crucial role in conveying this ethos.
              </p>
              <div className="btn-container">
                <Link
                  to="/cases/letscode"
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

export default CaseLetsCode
