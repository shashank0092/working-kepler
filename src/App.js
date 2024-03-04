import React from 'react';
import { Provider } from 'react-redux'
import KeplerContainer from './KeplerContainer';
import rootReducer from './reducer';
import store from './store';



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <KeplerContainer />
      </div>
    </Provider>
  );
};

export default App;
