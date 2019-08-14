import React from 'react';
import './App.css';

// Components
// import { initialState, reducer } from './reducers/Reducer';
import TodoForm from './components/TodoForm';

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Todos:</h1>
        <TodoForm />
      </header>
    </div>
  );
}

export default App;

/*

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [{ todos }, dispatch] = useReducer(reducer, initialState);
  //console.log(dispatch);

  /*when we click to add a new todo, we send a
  dispatch(action) that invokes our reducer and
  passes in our current state and our action*/
  // const addTodo = (e, item) => {
  //   e.preventDefault();
  //   //we take in a property (i.e. item) and pass in as a payload
  //   dispatch({ type: 'ADD_TODO', payload: item })
  // };
  // const toggleCompleted = itemId => {
  //   console.log(itemId);
  //   dispatch({ type: 'TOGGLE_COMPLETED', payload: itemId })
  // };
  // const clearCompleted = e => {
  //   e.preventDefault();
  //   //don't need a payload for this one
  //   dispatch({ type: 'CLEAR_COMPLETED' });
  // };

