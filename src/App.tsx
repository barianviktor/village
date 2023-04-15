import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/reducers";
import { bindActionCreators } from "redux";

import { ResourcesState } from "./state/reducers/resourcesState.interface";
import * as ResourceActions from "./state/actions/resourceActions";
import * as GameActions from "./state/actions/gameActions";
import { GameState } from "./state/reducers/gameState.interface";
import Navigation from "./components/navigation/navigation";
import "./App.scss";
import "./assets/slideTransitions.scss";
import IconButton from "./components/shared/icon-button/icon-button";
import { ReactComponent as CloseIcon } from "./assets/icons/close.svg";
import { BrowserRouter } from "react-router-dom";
import Map from "./components/map/map";
export default function App() {
  const resources: ResourcesState = useSelector(
    (state: RootState) => state.resources
  );
  const game: GameState = useSelector((state: RootState) => state.game);

  const [mounted, setMounted] = useState(false);

  const dispatch = useDispatch();

  const {
    addCurrency,
    removeCurrency,
    addWood,
    removeWood,
    addHousing,
    removeHousing,
    addMeal,
    removeMeal,
    addCurrencyPerTurn,
    removeCurrencyPerTurn,
    addWoodPerTurn,
    removeWoodPerTurn,
    addMealPerTurn,
    removeMealPerTurn,
  } = bindActionCreators(ResourceActions, dispatch);

  const { increaseGameTime } = bindActionCreators(GameActions, dispatch);

  useEffect(() => {
    setupResources();
    setupInitialResourcesPerTurn();
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resources && mounted && game) {
      console.log("mounted");
      setInterval(() => {
        console.log("interval");
        addCurrency(resources.currencyPerTurn);
        addWood(resources.woodPerTurn);
        addMeal(resources.mealsPerTurn);
        increaseGameTime();
      }, game.turnLength);
    }
  }, [mounted]);

  const setupInitialResourcesPerTurn = (): void => {
    console.log("setupInitialResourcesPerMinute");
    addCurrencyPerTurn(2);
    addWoodPerTurn(4);
    addMealPerTurn(2);
  };
  const setupResources = (): void => {
    console.log("setupResources");
    addCurrency(80);
    addWood(60);
    addHousing(10);
    addMeal(100);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <IconButton
        ripple={true}
        icon={<CloseIcon />}
        onClick={() => {
          console.log("asd");
        }}
      ></IconButton>
      <div>
        <h4>Current Game turn: {game.turn}</h4>
        <h4>Current Language: {game.language}</h4>
        <h4>Current theme: {game.theme}</h4>
      </div>
      <div>
        <h2>
          Current Gold: {resources.currency} / Gold Per Turn:
          {resources.currencyPerTurn}
        </h2>
      </div>
      <div>
        <h2>
          Current Wood: {resources.wood} / Wood Per Turn:
          {resources.woodPerTurn}
        </h2>
      </div>
      <div>
        <h2>
          Current Meals: {resources.meals} / Meals Per Turn:
          {resources.mealsPerTurn}
        </h2>
      </div>
      <div>
        <h2>Current Housing: {resources.housing}</h2>
      </div>
      <Map />
    </div>
  );
}
