import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      items: state.items.concat(action.item),
      totalAmount: state.totalAmount + action.item.price,
      order: state.order
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    if (existingItem) {
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      const updatedItems = state.items.filter(item => item.id !== action.id);
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }

  if (action.type === 'REMOVE_ALL') {
    return defaultCartState;
  }

  if (action.type === 'EDIT_ITEM_BY_INDEX') {
    const existingItem = state.items[action.index];

    if (existingItem) {
      const updatedItems = [...state.items];
      const updatedItem = {
        ...existingItem,
        id: action.editedItem.id,
        price: action.editedItem.price,
      };
      updatedItems[action.index] = updatedItem;
      const updatedTotalAmount = state.totalAmount - existingItem.price + updatedItem.price;
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const removeItemsFromCartHandler = () => {
    dispatchCartAction({ type: 'REMOVE_ALL' });
  };

  const editItemByIndexInCartHandler = (index, editedItem) => {
    dispatchCartAction({ type: 'EDIT_ITEM_BY_INDEX', index: index, editedItem: editedItem });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAll: removeItemsFromCartHandler,
    editItemByIndex: editItemByIndexInCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;