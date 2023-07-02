import React from 'react'

import classes from './CheckAccessories.module.css'

const CheckAccessories = ({ isActive }) => {
  return (
    <div className={`${classes.check} ${isActive ? `${classes.selected}` : ''}`}></div>
  )
}

export default CheckAccessories