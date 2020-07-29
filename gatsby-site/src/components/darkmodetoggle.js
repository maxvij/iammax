import React from "react"

const DarkModeToggle = (props) => {
  // If the `onClick` prop exists, call it with 'light'
  const handleClick = () => props.darkMode.value ? (props.onClick && props.onClick('light')) : (props.onClick && props.onClick('dark'));

  return (
      <div className="switch-wrapper">
        <label className="switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={handleClick} checked={(props.darkMode.value)}/>
          <div className="slider round"> </div>
        </label>
      </div>
  )
}

export default DarkModeToggle;