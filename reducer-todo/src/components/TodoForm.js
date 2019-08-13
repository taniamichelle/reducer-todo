import React, { useState, useReducer } from 'react';
//this form manages its own state (i.e. our form will live within the TodoForm)
import { initialState, reducer } from '../reducers/Reducer';

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState();

    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <form>
            <div>
                {!state.completed ? (
                    <h1>
                        {state.item}{' '}
                        <input
                            className="toggle-completed"
                            onClick={() => dispatch({ type: 'TOGGLE_COMPLETED' })}
                        />
                    </h1>
                ) : (
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
                    )}
            </div>
        </form>
    );
};

export default TodoForm;