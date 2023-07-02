import React, { useState } from 'react';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HomeBody from './components/Layout/HomeBody';

import CartProvider from './store/CartProvider';

function App() {
  const [checkPositionCart, setCheckPositionCart] = useState('Models');
  const [activeShowAlert, setActiveShowAlert] = useState(false)
  const [disabledChangePositionCart, setDisabledChangePositionCart] = useState(true)
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <CartProvider>
      <Header
        setCheckPositionCart={setCheckPositionCart}
        checkPositionCart={checkPositionCart}
        selectedModel={selectedModel}
        disabledChangePositionCart={disabledChangePositionCart}
        setActiveShowAlert={setActiveShowAlert}
      />
      <HomeBody
        checkPositionCart={checkPositionCart}
        setSelectedModel={setSelectedModel}
        selectedModel={selectedModel}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
        setDisabledChangePositionCart={setDisabledChangePositionCart}
        disabledChangePositionCart={disabledChangePositionCart}
      />
      <Footer
        setCheckPositionCart={setCheckPositionCart}
        checkPositionCart={checkPositionCart}
        selectedModel={selectedModel}
        selectedColor={selectedColor}
        disabledChangePositionCart={disabledChangePositionCart}
        setActiveShowAlert={setActiveShowAlert}
        activeShowAlert={activeShowAlert}
      />
    </CartProvider>
  );
}

export default App;