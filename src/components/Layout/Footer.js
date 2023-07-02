import React, { useContext } from 'react'

import classes from "./Footer.module.css"

import White from "../../assets/product01_col01.jpg"
import Grey from "../../assets/product01_col02.jpg"
import Orange from "../../assets/product01_col03.jpg"
import Mineral from "../../assets/product02_col01.jpg"
import Perl from "../../assets/product02_col02.jpg"

import SecondaryNav from '../UI/SecondaryNav'

import CartContext from '../../store/CartContext'

const Footer = ({ setCheckPositionCart, checkPositionCart, selectedModel, selectedColor, disabledChangePositionCart, setActiveShowAlert, activeShowAlert }) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount
  const cartItems = cartCtx.items;

  const imageSummary = {
    'white': White,
    'metallic': Mineral,
    'grey': Grey,
    'orange': Orange,
    'perl': Perl,
  }

  let imageCar = White
  if (cartItems.lenght !== 0 && cartItems[1]) {
    imageCar = imageSummary[cartItems[1].id]
  }

  const isDisabled = selectedModel === null

  return (
    <div className={`${classes.footer} ${isDisabled ? classes.disabled : ''} ${activeShowAlert === true ? classes['show-alert'] : ''}`}>
      <div className={classes['selected-product']}>
        <img alt="Product preview" src={imageCar} />
        <div className={classes['tot-price']}>
          <span>Total</span>
          <span className={classes.total}>$<b>{totalAmount}</b></span>
        </div>
      </div>
      <SecondaryNav setActiveShowAlert={setActiveShowAlert} setCheckPositionCart={setCheckPositionCart} checkPositionCart={checkPositionCart} isDisabled={isDisabled} selectedColor={selectedColor} disabledChangePositionCart={disabledChangePositionCart} />
      <span className={classes.alert}>Please, select a model first!</span>
    </div>
  );
};

export default Footer
