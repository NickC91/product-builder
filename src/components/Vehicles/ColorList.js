import React, { useContext } from 'react'

import classes from './ColorList.module.css'

import White from "../../assets/product01_col01.jpg"
import Grey from "../../assets/product01_col02.jpg"
import Orange from "../../assets/product01_col03.jpg"
import Mineral from "../../assets/product02_col01.jpg"
import Perl from "../../assets/product02_col02.jpg"

import CartContext from '../../store/CartContext'

import RadioColor from "../UI/RadioColor"

const Card = ({ color, isActive }) => {
  return (
    <li className={isActive ? `${classes.selected}` : ''}>
      <img src={color === "white" ? White : color === "grey" ? Grey : color === "orange" ? Orange : color === "metallic" ? Mineral : color === "perl" ? Perl : "Image not found"} alt="Product Preview" />
    </li>
  )
}

const ColorList = ({ selectedModel, setSelectedColor }) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const handleRadioColorChange = (selectedColor) => {
    setSelectedColor(selectedColor);
  }

  return (
    <>
      <ul className={classes['color-list']}>
        <Card color={"white"} isActive={cartItems.some((item) => item.id === 'white')} />
        <Card color={"grey"} isActive={cartItems.some((item) => item.id === 'grey')} />
        <Card color={"orange"} isActive={cartItems.some((item) => item.id === 'orange')} />
        <Card color={"metallic"} isActive={cartItems.some((item) => item.id === 'metallic')} />
        <Card color={"perl"} isActive={cartItems.some((item) => item.id === 'perl')} />
      </ul>
      <RadioColor onClick={handleRadioColorChange} selectedModel={selectedModel} setSelectedColor={setSelectedColor} />
    </>
  )
}

export default ColorList