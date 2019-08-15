import React from 'react';

const TodoList = ({ todos, toggleCompleted }) => {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}
                    onClick={() => toggleCompleted(todo.id)}
                    className={todo.completed ? 'completed' : ''}>
                    {todo.item}
                </div>
            ))}
        </div>
    );
}

export default TodoList;