import React, { useState } from 'react';

const TodoForm = ({ addTodo, clearCompleted }) => {
    const [item, setItem] = useState();

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(item);
        setItem('');
    };

    const handleClear = e => {
        e.preventDefault();
        clearCompleted();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="add-todo"
                type="text"
                name="item"
                value={item}
                onChange={handleChanges}
            />
            {/* when we click to add a new todo, we send a
                dispatch(action) that invokes our reducer and
                passes in our current state and our action */}
            <button type='submit'>Add Todo</button>
            <button className='clear-btn' onClick={handleClear} > Clear Completed</button>
        </form>
    );
}

export default TodoForm;

/*
HENRY'S TodoForm File SOLUTION:

import React, {useState} from 'react';

//accept addTodo and clearCompleted as props from App
const TodoForm = ({addTodo, clearCompleted}) => {
    const [item, setItem] =useState('');
    const handleChange = event => setItem(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        addTodo(item);
        setItem('');
    };
    const handleClear = event => {
        event.preventDefault();
        clearCompleted();
    };
    return (
        <form onSubmit= {handleSubmit}>
            <input type= 'text'
                    name='item'
                    placeholders='todo'
                    value={item}
                    onChange={handleChange}/>
            <button type= 'submit'>Add Todo</button>
            <button onClick={handleClear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;
*/


