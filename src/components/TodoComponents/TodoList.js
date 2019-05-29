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
            todoList: [
                // {
                //     task: "Mow the lawn", 
                //     id: new Date(), 
                //     completed: false
                // }
            ]
        }
    }

    handleChanges = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            task: this.state.input,
            id: new Date(),
            completed: false
        }
        this.setState ({
            input: "",
            todoList: [...this.state.todoList, newTodo]
        });
    }


    render() {
        return(
            <div>
                <ul>
                    {this.state.todoList.map(todoEachObj => (
                        <Todo todoItemObj={todoEachObj} />
                    ))}
                </ul>
                <TodoForm 
                    inputChange={this.handleChanges} 
                    addTodo={this.addTodo} 
                    clear={this.clear} 
                    value={this.state.input} 
                    name="input"
                />

            </div>
        );
    }
}

export default TodoList;