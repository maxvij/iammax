import React from "react"
import Lottie from "react-lottie";

export default class DarkModeToggle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isStopped: false,
            isPaused: false,
            direction: 1
        }
    }


    render() {
        const defaultOptions = {
            loop: false,
            autoplay: this.props.darkMode.value,
            animationData: require('../animations/DarkLightToggle.json'),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        // If the `onClick` prop exists, call it with 'light'
        const
            handleClick = () => this.props.darkMode.value ? (this.props.onClick && this.props.onClick('light')) : (this.props.onClick && this.props.onClick('dark'));
        return <div className="switch-wrapper" onClick={handleClick}>
            <Lottie options={defaultOptions}
                    height={32}
                    width={64}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}
                    direction={this.props.darkMode.value ? 1 : -1}
            />
        </div>
    }
}