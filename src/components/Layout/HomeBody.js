import React, { useState, useEffect } from 'react'

import ModelList from '../Vehicles/ModelList'
import ColorList from '../Vehicles/ColorList'
import AccessoriesList from '../Vehicles/AccessoriesList'
import Summary from '../Vehicles/Summary'

import classes from "./HomeBody.module.css"

import Indicator from '../UI/Indicator'

const HomeBody = ({
  checkPositionCart,
  setSelectedModel,
  selectedModel,
  setSelectedColor,
  setDisabledChangePositionCart,
  disabledChangePositionCart }) => {

  const positionCartNumber = {
    'Models': 1,
    'Colors': 2,
    'Accessories': 3,
    'Summary': 4
  }

  const currentPositionCartNumber = positionCartNumber[checkPositionCart];
  const [currentPosition, setCurrentPosition] = useState(currentPositionCartNumber);
  const [previusPosition, setPreviusPosition] = useState(currentPositionCartNumber);

  useEffect(() => {
    setPreviusPosition(currentPosition);
    setCurrentPosition(currentPositionCartNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPositionCartNumber]);

  return (
    <div className={classes['builder-steps']} >
      <ul>
        <div className={`${classes['builder-step']} ${currentPosition === 1 && previusPosition > currentPosition ? classes.back + ' ' + classes.active : currentPosition > previusPosition ? classes.moveLeft : currentPosition === 1 ? classes.active : ''}`}>
          <section className={classes['step-content']} >
            <Indicator checkPositionCart={checkPositionCart} />
            <ModelList setSelectedModel={setSelectedModel} setDisabledChangePositionCart={setDisabledChangePositionCart} />
          </section>
        </div>
        {!disabledChangePositionCart ?
          <>
            <div className={`${classes['builder-step']} ${currentPosition === 2 && previusPosition > currentPosition ? classes.back + ' ' + classes.active : currentPosition > previusPosition && currentPosition !== 2 ? classes.moveLeft : currentPosition === 2 ? classes.active : ''}`}>
              <section className={classes['step-content']} >
                <Indicator checkPositionCart={checkPositionCart} />
                <ColorList selectedModel={selectedModel} setSelectedColor={setSelectedColor} />
              </section>
            </div>
            <div className={`${classes['builder-step']} ${currentPosition === 3 && previusPosition > currentPosition ? classes.back + ' ' + classes.active : currentPosition > previusPosition && currentPosition !== 3 ? classes.moveLeft : currentPosition === 3 ? classes.active : ''}`}>
              <section className={classes['step-content']} >
                <Indicator checkPositionCart={checkPositionCart} />
                <AccessoriesList selectedModel={selectedModel} />
              </section>
            </div>
            <div className={`${classes['builder-step']} ${currentPosition === 4 ? classes.active : ''}`}>
              <section className={classes['step-content']} >
                <Indicator checkPositionCart={checkPositionCart} />
                <Summary />
              </section>
            </div>
          </>
          :
          ''}
      </ul>
    </div>
  )
}

export default HomeBody