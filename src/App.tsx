/* import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { RootState } from "./state/reducers";

function App() {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
 */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/reducers";
import { ResourcesState } from "./state/reducers/resourcesState.interface";
import { addCurrency } from "./state/actions/resourceActions";

export default function App() {
  const resources: ResourcesState = useSelector(
    (state: RootState) => state.resources
  );
  /*   const bank = useSelector((state: RootState) => state.bank);
   */

  /*   const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  ); */

  useEffect(() => {
    setupResources();
    console.log(resources);
  }, []);

  const setupResources = () => {
    console.log("setupResources");
    addCurrency(80);
  };

  return (
    <div className="App">
      <div>
        <h2>
          Current Gold: {resources.currency} / Gold Per Minute:
          {resources.currencyPerMinute}
        </h2>
      </div>
      <div>
        <h2>
          Current Wood: {resources.wood} / Wood Per Minute:
          {resources.woodPerMinute}
        </h2>
      </div>
      <div>
        <h2>
          Current Meals: {resources.meals} / Meals Per Minute:
          {resources.mealsPerMinute}
        </h2>
      </div>
      <div>
        <h2>Current Housing: {resources.housing}</h2>
      </div>
    </div>
  );
}
