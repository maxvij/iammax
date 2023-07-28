import React from "react"
import Figma from "../images/icons/figma.svg"
import ScreenStudio from "../images/icons/screenstudio.png"
import Notion from "../images/icons/notion.svg"
import VSCode from "../images/icons/vscode.svg"
import UseContrast from "../images/icons/usecontrast.png"
import UseBerry from "../images/icons/useberry.svg"

const Tools = props => {
  return (
    <section className="tools">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>My favorite tools</h2>
            <p className="subtitle">Can't get anything done without these</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="margin"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 tools-background">
            <div className="row">
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://www.figma.com"
                  }}
                >
                  <div className="icon">
                    <img src={Figma} />
                  </div>
                  <h3>Figma</h3>
                  <p>design</p>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://www.screen.studio"
                  }}
                >
                  <div className="icon">
                    <img src={ScreenStudio} />
                  </div>
                  <h3>Screen Studio</h3>
                  <p>screen recording</p>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://www.notion.so"
                  }}
                >
                  <div className="icon">
                    <img src={Notion} />
                  </div>
                  <h3>Notion</h3>
                  <p>organizing</p>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://code.visualstudio.com/"
                  }}
                >
                  <div className="icon">
                    <img src={VSCode} />
                  </div>
                  <h3>VSCode</h3>
                  <p>code</p>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://usecontrast.com/"
                  }}
                >
                  <div className="icon">
                    <img src={UseContrast} />
                  </div>
                  <h3>Use Contrast</h3>
                  <p>accessibility</p>
                </div>
              </div>
              <div className="col-4 col-sm-6 col-md-4">
                <div
                  className="panel"
                  role="button"
                  onClick={() => {
                    window.location = "https://useberry.com/"
                  }}
                >
                  <div className="icon">
                    <img src={UseBerry} />
                  </div>
                  <h3>Useberry</h3>
                  <p>user testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
