// App.jsx
import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Step 1: Create Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Step 2: Create Store
const store = createStore(counterReducer);

// Step 3: Main App
function CounterApp() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>-</button>
    </div>
  );
}

// Step 4: Wrap App with Provider
function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

export default App;
