import React from 'react'



const Todo = (props) => {

    // Setting how to display the Date/Time properly
    const options = {weekday: "short", month: "long", year: "numeric", hour: "numeric", minute: "numeric"}
    const date = props.todoItemObj.date.toLocaleDateString("en-US", options)

    // If the list item is considered complete, then we add an extra class called 'complete'
    const classSet = (props.todoItemObj.completed) ? "todoItem complete" : "todoItem";


    return (
        <li 
            className={classSet} 
            onClick={props.onClick}
            id={props.id}
        >
            {props.todoItemObj.task} - {date}
        </li>
    );
}

export default Todo;
