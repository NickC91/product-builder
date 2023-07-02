import React, { useContext } from 'react'

import classes from './Summary.module.css'

import White from "../../assets/product01_col01.jpg"
import Grey from "../../assets/product01_col02.jpg"
import Orange from "../../assets/product01_col03.jpg"
import Mineral from "../../assets/product02_col01.jpg"
import Perl from "../../assets/product02_col02.jpg"

import CartContext from '../../store/CartContext'

const Summary = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const imageSummary = {
    'white': White,
    'metallic': Mineral,
    'grey': Grey,
    'orange': Orange,
    'perl': Perl,
  }

  const labelSummary = {
    'white': "White - $0",
    'grey': "Mineral Grey - $550",
    "orange": "Orange Metallic - $550",
    'metallic': "Grey Metallic - $0",
    "perl": "White Perl Metallic - $1.800"
  }

  const imageCar = imageSummary[cartItems[1].id]
  const colorLabel = labelSummary[cartItems[1].id]
  const accessoriesItem = cartItems.slice(2).sort((a, b) => a.order - b.order)

  return (
    <ul className={classes["summary-list"]}>
      <li>
        <h2>Model</h2>
        <img className={classes['product-preview']} src={imageCar} alt="product-preview" />
        <h3>{cartItems[0].id}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.
        </p>
      </li>
      <li className={classes.width}>
        <h2>Color</h2>
        <span className={classes["summary-color"]}>
          <em className={classes["color-swatch"]} data-color={cartItems[1].id}></em>
          <em className={classes["color-label"]}>{colorLabel}</em>
        </span>
      </li>
      <li data-summary="accessories">
        <h2>Accessories</h2>
        <ul className={`${classes["summary-accessories"]} ${classes["custom-list"]}`}>
          {cartItems.length === 2 ?
            <li>
              <p>No Accessories selected;</p>
            </li> :
            accessoriesItem.map((el) => {
              const { id, order } = el
              return (
                <li key={order}>
                  <p>{id}</p>
                </li>
              )
            })
          }
        </ul>
      </li>
    </ul>
  )
}

export default Summary