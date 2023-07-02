import React from 'react'

import classes from "./Navbar.module.css"

const Navbar = ({ setCheckPositionCart, checkPositionCart, selectedModel, disabledChangePositionCart, setActiveShowAlert }) => {

  const handleItemClick = (item) => {
    if (disabledChangePositionCart === true) {
      setActiveShowAlert(true)
    }
    else {
      setCheckPositionCart(item)
    }
  }

  return (
    <nav>
      <ul>
        <li onClick={() => handleItemClick('Models')} className={checkPositionCart === 'Models' ? `${classes.active}` : `${classes.deselected}`}>
          <a href="#models">Models</a>
        </li>
        <li onClick={() => handleItemClick('Colors')} className={selectedModel === null ? `${classes.disabled}` : selectedModel !== null && checkPositionCart === 'Colors' ? `${classes.active}` : `${classes.deselected}`}>
          <a href="#colors">Colors</a>
        </li>
        <li onClick={() => handleItemClick('Accessories')} className={selectedModel === null ? `${classes.disabled}` : selectedModel !== null && checkPositionCart === 'Accessories' ? `${classes.active}` : `${classes.deselected}`}>
          <a href="#accessories">Accessories</a>
        </li>
        <li onClick={() => handleItemClick('Summary')} className={selectedModel === null ? `${classes.disabled}` : selectedModel !== null && checkPositionCart === 'Summary' ? `${classes.active}` : `${classes.deselected}`}>
          <a href="#summary">Summary</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar