import React from 'react';


const TodoForm = (props) => {
    
    return (
        <form>
            <input 
                type="text" 
                placeholder="Enter in new task" 
                onChange={props.inputChange}
            />

            <button className="addTodo" onClick={props.addTodo}>Add Todo</button>
            <button className="clear" onClick={props.clear}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;