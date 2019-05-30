// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            todoList: [
                {
                    task: "Mow the lawn", 
                    id: 1528817077286, 
                    date: new Date(),
                    completed: false
                }
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
        if (this.state.input) {
            const newTodo = {
                task: this.state.input,
                id: Date.now(),
                date: new Date(),
                completed: false
            }
            this.setState ({
                input: "",
                todoList: [...this.state.todoList, newTodo]
            });
        }
    }

    toggleComplete = (e) => {
        console.log(e.target.onClick);
    }

    clear = (e) => {
        e.preventDefault();
        this.setState ({
            todoList: []
        })
    }



    render() {
        return(
            <div className="container">
                <ul>
                    {this.state.todoList.map(todoEachObj => (
                        <Todo 
                            todoItemObj={todoEachObj} 
                            key={todoEachObj.id}
                            onClick={this.toggleComplete}
                        />
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