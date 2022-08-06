import React, {Fragment, useState} from 'react'
import items from "./data"
import Player from './components/Player/Player';
import Postion from './components/Player/Postion';
import Header from './components/Header/Header';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

const allPostion = ["all", ...new Set(items.map((item) => {
  return item.postion;
}))]

const App = () => {

  const [players, setPlayers] = useState(items);
  const [postion, setPostion] = useState(allPostion);
  const [showCart, setShowCart] = useState(false);

  const filterPostion = (postion) => {
    if (postion === "all") {
      setPlayers(items);
      return;
    }

    const newPlayer = items.filter((item) => (item.postion === postion))
    setPlayers(newPlayer);
  }
  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Postion postion={postion} filterPostion={filterPostion}></Postion>
      <Player players={players}></Player>
    </CartProvider>
  )
}

export default App