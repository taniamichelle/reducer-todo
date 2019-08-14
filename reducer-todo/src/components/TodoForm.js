import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/Reducer';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            {/* {!state.completed ? (
                <h1>
                    {state.item}{' '}
                    <input
                        className="toggle-completed"
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' })}
                    />
                </h1>
            ) : ( */}
            <div>
                <input
                    className="add-todo"
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo })}>Add Todo</button>
            </div>
            {/* )} */}
            <div className='todo-list'>
                {state.todos.map(item => (console.log('test todo list')))}
                <button className='clear-btn' onClick={() => dispatch({ type: 'CLEAR_COMPLETED', payload: newTodo.id })}>Clear Todo</button>
            </div>
        </div>
    );
}

export default TodoForm;

