import React, { useState, useContext } from 'react'

import classes from './ModelList.module.css'

import BmwI3 from "../../assets/product01_col01.jpg"
import BmwI8 from "../../assets/product02_col01.jpg"

import CartContext from '../../store/CartContext'

import RadioModel from "../UI/RadioModel"

const Card = ({ title, isActive, onClick, price }) => {

  const handleClick = () => {
    onClick(title, price);
  };

  return (
    <li onClick={handleClick} className={isActive ? classes.selected : ''} data-price={price} >
      <span className={classes.name}>{title}</span>
      <img src={title === 'BMW i3' ? BmwI3 : BmwI8} alt={title} />
      <span className={classes.price}>from ${title === 'BMW i3' ? "42,400" : "140,700"}</span>
      <RadioModel isActive={isActive} />
    </li>
  );
}

const ModelList = ({ setSelectedModel, setDisabledChangePositionCart }) => {
  const [activeCard, setActiveCard] = useState(null);

  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const handleCardClick = (title, price) => {
    if (activeCard === title) {
      setActiveCard(null)
      setSelectedModel(null)
      setDisabledChangePositionCart(true)
      cartCtx.removeAll()
    } else {
      setActiveCard(title)
      setSelectedModel(title)
      setDisabledChangePositionCart(false)
      if (cartCtx.items.length > 0) {
        if (title === 'BMW i3') {
          cartCtx.removeAll()
          cartCtx.addItem({ id: 'BMW i3', price: 42400 })
          cartCtx.addItem({ id: 'white', price: 0 })
        } else {
          cartCtx.removeAll()
          cartCtx.addItem({ id: 'BMW i8', price: 140700 })
          cartCtx.addItem({ id: 'metallic', price: 0 })
        }
      } else {
        cartCtx.addItem({ id: title, price: price });
        if (title === 'BMW i3') return cartCtx.addItem({ id: 'white', price: 0 })
        else return cartCtx.addItem({ id: 'metallic', price: 0 })
      }
    }
  }

  return (
    <ul className={`${classes['models-list']} ${classes['options-list']} ${classes['cd-col-2']}`}>
      <Card title="BMW i3" isActive={activeCard === 'BMW i3' || cartItems.some((item) => item.id === 'BMW i3')} onClick={handleCardClick} price={42400} />
      <Card title="BMW i8" isActive={activeCard === 'BMW i8' || cartItems.some((item) => item.id === 'BMW i8')} onClick={handleCardClick} price={140700} />
    </ul>
  )
}

export default ModelList