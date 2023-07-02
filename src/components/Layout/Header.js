import React from 'react'

import classes from "./Header.module.css"

import Navbar from '../UI/Navbar'

const Header = ({ setCheckPositionCart, checkPositionCart, selectedModel, disabledChangePositionCart, setActiveShowAlert }) => {

  return (
    <div className={classes['main-header']}>
      <h1>Product Builder</h1>
      <Navbar setActiveShowAlert={setActiveShowAlert} setCheckPositionCart={setCheckPositionCart} checkPositionCart={checkPositionCart} selectedModel={selectedModel} disabledChangePositionCart={disabledChangePositionCart} />
    </div>
  )
}

export default Header