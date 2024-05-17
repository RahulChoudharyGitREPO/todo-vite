import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
