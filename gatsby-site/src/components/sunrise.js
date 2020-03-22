import React from "react"
import Sunset from "./sunset";

const Sunrise = (props) => {
  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick('light');

  return (
    <div className="theme-toggle" onClick={handleClick}>LIGHT</div>
  )
}

export default Sunrise;