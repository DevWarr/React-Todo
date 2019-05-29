import React from 'react'



const Todo = (props) => {

    const options = {weekday: "short", month: "long", year: "numeric"}
    const date = props.todoItemObj.date.toLocaleDateString("en-US", options)

    return (
        <li className="todoItem" onClick={props.onClick}>{props.todoItemObj.task} - {date}</li>
    );
}

export default Todo;
