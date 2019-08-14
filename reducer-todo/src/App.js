import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './reducers/Reducer';

// components
import TodoForm from './components/TodoForm';
import TodoList from './components/List';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log('state', state);

  const addTodo = (item) => {
    //we take in a property (i.e. item) and pass in as a payload
    dispatch({ type: 'ADD_TODO', payload: item })
  };
  const toggleCompleted = id => {
    //console.log(itemId);
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id })
  };
  const clearCompleted = e => {
    //don't need a payload for this one
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className="App">
      <header>
        <h1>Todos:</h1>
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
      </header>
    </div>
  );
}

export default App;

/*
HENRY'S SOLUTION:
import React from 'react';
import { reducer, initialState } from './reducers/Reducer';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState):
  //console.log('state', state);

  const addTodo = item => {
    dispatch({type: 'ADD_TODO', payload: item});
  };

  const toggleTodo = id => {
    dispatch({type: "TOGGLE_TODO", payload: id});
  };

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'});
  };

  return(
    <div className = 'App'>
      <TodoList todoArray = {state.todoArray} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  )
}

export default App;
*/



