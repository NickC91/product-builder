import React from 'react'

import classes from './SecondaryNav.module.css'

const SecondaryNav = ({ setCheckPositionCart, checkPositionCart, isDisabled, disabledChangePositionCart, setActiveShowAlert }) => {

  const handleItemClick = (title) => {
    if (disabledChangePositionCart === true) {
      setActiveShowAlert(true)
    }
    else {
      setCheckPositionCart(title)
    }
  }

  return (
    <nav className={`${classes['secondary-nav']} 
    ${isDisabled ? classes.disabled : ''} 
    ${checkPositionCart === "Models" ? classes['disabled-prev'] + ' ' + classes.width : ''}`}>
      <ul>
        <li className={classes['nav-item'] + ' ' + classes.next}>
          <ul>
            <li onClick={() => handleItemClick('Colors')} className={checkPositionCart === 'Models' ? classes.visible : classes.visible + ' ' + classes.visited}><a href="#0">Colors</a></li>
            <li onClick={() => handleItemClick('Accessories')} className={checkPositionCart === 'Colors' ? classes.visible : checkPositionCart === 'Accessories' || checkPositionCart === 'Summary' ? classes.visible + ' ' + classes.visited : ''}><a href="#0">Accessories</a></li>
            <li onClick={() => handleItemClick('Summary')} className={checkPositionCart === 'Accessories' ? classes.visible : checkPositionCart === 'Summary' ? classes.visible + ' ' + classes.visited : ''}><a href="#0">Summary</a></li>
            <li onClick={() => alert('Bought')} className={checkPositionCart === 'Summary' ? classes.visible : ''}><a href="#0">Buy Now</a></li>
          </ul>
        </li>
        <li className={classes['nav-item'] + ' ' + classes.prev}>
          <ul>
            <li className={checkPositionCart === "Models" ? classes.visible : classes.visible + ' ' + classes.visited}><a href="#0">Models</a></li>
            <li onClick={() => handleItemClick('Models')} className={checkPositionCart === 'Colors' ? classes.visible : checkPositionCart === 'Accessories' || checkPositionCart === 'Summary' ? classes.visible + ' ' + classes.visited : ''}><a href="#0">Models</a></li>
            <li onClick={() => handleItemClick('Colors')} className={checkPositionCart === 'Accessories' ? classes.visible : checkPositionCart === 'Summary' ? classes.visible + ' ' + classes.visited : ''}><a href="#0">Colors</a></li>
            <li onClick={() => handleItemClick('Accessories')} className={checkPositionCart === "Summary" ? classes.visible : ''}><a href="#0">Accessories</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default SecondaryNav