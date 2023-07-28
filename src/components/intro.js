import React from "react"
import Max from "../images/max-bw-square.webp"
import Lottie from "react-lottie"

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isStopped: false,
      isPaused: false,
      direction: 1,
    }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("../animations/Scroll.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-lg-5">
              <h1>Hi, I'm Max,</h1>
              <p className="subtitle">
                a creative <span>Product Designer</span>, specialized in{" "}
                <span>Design Systems</span> and <span>micro animations</span>.{" "}
                <br />
              </p>
              <div className="animation-wrapper">
                <Lottie
                  options={defaultOptions}
                  height={48}
                  width={48}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                  isClickToPauseDisabled={true}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 offset-lg-3">
              <div className="profile-avatar">
                <img src={Max} alt="Max van IJsselmuiden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
