import './App.css';
import Routes from './navigation';
import { Provider } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";
import createStore from "./store";

const { store, persistor } = createStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
