import React from 'react';


const TodoForm = (props) => {
    
    return (
        <form>
            <input 
                type="text" 
                placeholder="Enter in new task" 
                onChange={props.inputChange}
                value={props.value}
                name={props.name}
            />
            <input 
                type="text"
                placeholder="Search for To-do item"
                onChange={props.onSearch}
            />

            <button className="addTodo" onClick={props.addTodo}>Add Todo</button>
            <button className="clear" onClick={props.clearAll}>Clear All</button>
            <button className="clear" onClick={props.clear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;


