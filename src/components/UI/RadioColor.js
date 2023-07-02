import React, { useContext } from 'react'

import classes from './RadioColor.module.css'

import CartContext from '../../store/CartContext'

const Item = ({ content, price, color, isActive, onClick }) => {
  const handleClick = () => {
    onClick(color, price);
  };

  return (
    <li onClick={handleClick} className={isActive ? `${classes.selected}` : ''} data-content={content} price={price} >
      <a data-color={color} href="#0">{content}</a>
    </li>
  )
}

const RadioColor = ({ onClick, selectedModel }) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const handleItemClick = (color, price) => {
    onClick(color, price)
    if (cartItems[1]) {
      cartCtx.editItemByIndex(1, { id: color, price: price })
    }
  }

  return (
    <ul className={classes.customizer}>
      {selectedModel === 'BMW i3' ?
        <>
          <Item onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'white')} color="white" content="White - $0" price={0} />
          <Item onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'grey')} color="grey" content="Mineral Grey - $550" price={550} />
          <Item onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'orange')} color="orange" content="Orange Metallic - $550" price={550} />
        </>
        :
        <>
          <Item onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'metallic')} color="metallic" content="Grey Metallic - $0" price={0} />
          <Item onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'perl')} color="perl" content="White Perl Metallic - $1.800" price={1800} />
        </>
      }
    </ul>
  )
}

export default RadioColor