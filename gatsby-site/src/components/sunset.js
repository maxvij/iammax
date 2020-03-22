import React from "react"

const Sunset = (props) => {
  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick('dark');

  return (
    <div className="theme-toggle" onClick={handleClick}>DARK</div>
  )
}

export default Sunset;