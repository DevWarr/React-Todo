// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            todoList: []
        }
    }

    handleChanges(e) {
        this.setState ({
            input: e.target.value
        });
    }

    addTodo() {
        this.setState ({
            
        });
    }


    render() {
        return(
            <div>
                {this.state.todoList.map(todoEachObj => {
                    <Todo todoItemObj={todoEachObj} />
                })}
                <TodoForm inputChange={this.handleChanges} addTodo={this.addTodo} clear={this.clear} />
            </div>
        );
    }
}

export default TodoList;