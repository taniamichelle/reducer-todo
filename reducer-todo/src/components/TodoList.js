import React from 'react';

const TodoList = ({ todos, toggleCompleted }) => {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}
                    onclick={() => toggleCompleted(todo.id)}
                    className={todo.completed ? 'completed' : ''}>
                    {todo.item}
                </div>
            ))}
        </div>
    );
};

export default TodoList;


/*
HENRY'S TodoList File SOLUTION:

import React from 'react';

const TodoList = ({todoArray, toggleTodo}) => {
    return (
        <div>
            {todoArrray.map(todo =>  (
                <div key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        className={todo.completed ? 'completed' : ''}>
                    {todo.item}
                </div>
            ))}
        </div>
    );
};

export default TodoList;
*/