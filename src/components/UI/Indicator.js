import React from 'react'

import classes from './Indicator.module.css'

const Indicator = ({ checkPositionCart }) => {

  const setStep = {
    'Models': 1,
    'Colors': 2,
    'Accessories': 3,
    'Summary': 4
  }

  const step = setStep[checkPositionCart];

  return (
    <div className={classes.header}>
      <h1>{checkPositionCart === 'Models' ? "Select Model" : checkPositionCart === 'Colors' ? "Select Color" : checkPositionCart}</h1>
      <span className={classes["steps-indicator"]}>Step <b>{step}</b> of 4</span>
    </div>
  )
}

export default Indicator