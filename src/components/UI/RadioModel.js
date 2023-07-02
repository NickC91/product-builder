import React from 'react'

import classes from "./RadioModel.module.css"

const RadioModel = ({ isActive }) => {
  return (
    <div className={`${classes.radio} ${isActive ? `${classes.selected}` : ''}`}></div>
  )
}

export default RadioModel