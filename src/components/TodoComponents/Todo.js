import React from 'react'



const Todo = (props) => {
    return (
        <li className="todoItem">{props.todoItemObj.name}</li>
    );
}

export default Todo;