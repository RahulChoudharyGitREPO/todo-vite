import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Enter your todo" />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
