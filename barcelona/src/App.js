import React, {Fragment, useState} from 'react'
import items from "./data"
import Player from './components/Player/Player';
import Postion from './components/Player/Postion';

const allPostion = ["all", ...new Set(items.map((item) => {
  return item.postion;
}))]

const App = () => {

  const [players, setPlayers] = useState(items);
  const [postion, setPostion] = useState(allPostion);

  const filterPostion = (postion) => {
    if (postion === "all") {
      setPlayers(items);
      return;
    }

    const newPlayer = items.filter((item) => (item.postion === postion))
    setPlayers(newPlayer);
  }

  return (
    <Fragment>
      <Postion postion={postion} filterPostion={filterPostion}></Postion>
      <Player players={players}></Player>
    </Fragment>
  )
}

export default App