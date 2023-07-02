import React, { useContext } from 'react'

import classes from './AccessoriesList.module.css'

import CartContext from '../../store/CartContext';

import CheckAccessories from '../UI/CheckAccessories'

const Item = ({ title, isActive, price, onClick, content, order }) => {
  const handleClick = () => {
    onClick(title, price, order);
  };

  return (
    <li onClick={handleClick} className={isActive ? `${classes.selected}` : ''} price={price} order={order}>
      <p>{title}</p>
      <span className={classes.price}>${content}</span>
      <CheckAccessories isActive={isActive} />
    </li>
  )
}

const AccessoriesList = ({ selectedModel }) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;

  const handleItemClick = (title, price, order) => {
    if (cartItems.some((item) => item.id === title)) {
      cartCtx.removeItem(title);
    } else {
      cartCtx.addItem({ id: title, price: price, order: order })
    };
  }

  return (
    <ul className={`${classes['options-list']} ${classes['accessories-list']}`}>
      {selectedModel === 'BMW i8' ?
        <Item order={1} onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'BMW Laserlight')} title={'BMW Laserlight'} price={6300} content={'6.300'} />
        : null}
      <Item order={2} onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'BMW Charging Station')} title={'BMW Charging Station'} price={1800} content={'1.080'} />
      <Item order={3} onClick={handleItemClick} isActive={cartItems.some((item) => item.id === 'BMW Maintenance Program Upgrade')} title={'BMW Maintenance Program Upgrade'} price={1895} content={'1.895'} />
      <Item order={4} onClick={handleItemClick} isActive={cartItems.some((item) => item.id === '1 Year BMW Maintenance Program Upgrade')} title={'1 Year BMW Maintenance Program Upgrade'} price={975} content={'975'} />
    </ul>
  );
};

export default AccessoriesList;