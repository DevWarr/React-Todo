import React from 'react'



const Todo = (props) => {

    const options = {weekday: "long", month: "long", year: "numeric"}

    return (
        <li className="todoItem">{props.todoItemObj.task}, {props.id.toloacaleString}(</li>
    );
}

export default Todo;
