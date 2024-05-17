import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <li>
            {todo}
            <button onClick={() => deleteTodo(todo)}>Delete</button>
        </li>
    );
};

export default TodoItem;
