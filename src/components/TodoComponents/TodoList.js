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
            search: "",
            todoList: []
        }
    }

    // Updates state.input whenver we type in the form
    handleChanges = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    // searchList = (e) => {
    //     if (e.target.value) {
    //         const search = e.target.value;
    //         const todos = this.state.todoList;
    //         const visible = todos.forEach(item => {
    //             if (!item.task.includes(search)) {
    //                 item.visible = false;
    //             } else {item.visible = true}
    //         })
    //         this.setState({ todoList: visible })
    //     }
    // }

    // Updates state.todoList with new todo Item
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

    // Updates state.todoList so item is considered complete
    toggleComplete = (e) => {
        const index = e.target.id;
        const todos = this.state.todoList;
        todos[index].completed = (!todos[index].completed)
        this.setState({
            todoList: todos
        })
    }

    // Updates state.todoList to remove any 'completed' items
    clearCompleted = (e) => {
        e.preventDefault();
        const todos = this.state.todoList.filter(obj => !obj.completed);
        this.setState({
            todoList: todos
        })
    }

    // Updates state.todoList to remove all items
    clearAll = (e) => {
        e.preventDefault();
        this.setState ({
            todoList: []
        })
    }

    /**HERE WE HAVE TWO COMPONENT PIECES!
     * WHAT DO THEY DO? WELL . . . Let me explain.
     * 
     * FIRST:
     * Did = Function happens AFTER mounting/updating/etc
     * Will = Function happend BEFORE mounting/updating/etc
     * 
     * NOW:
     * WillMount checks our localStorage.
     *   If our array is there, it grabs it and setsState
     *   This happens BEFORE rendering anything, so the List appears properly.
     * DidUpdate sets our localStorage.
     *   If we update anything about our state, our localStorage updates.
     *   This happens AFTER updating anything, so we have the latest info.
     */
    componentWillMount() {
        localStorage.getItem("listArr") ? 
            this.setState({
                todoList: JSON.parse(localStorage.getItem("listArr"))
            })
            : this.setState({ todoList: [] })
    }
    componentDidUpdate() {
        localStorage.setItem("listArr", JSON.stringify(this.state.todoList));
    }


    render() {
        return(
            <div className="container">
                <ul>
                    {this.state.todoList.map((todoEachObj, i) => {
                        return <Todo 
                            todoItemObj={todoEachObj} 
                            key={todoEachObj.id}
                            id={i}
                            onClick={this.toggleComplete}
                        />
                    })}
                </ul>
                <TodoForm 
                    inputChange={this.handleChanges} 
                    addTodo={this.addTodo} 
                    clearAll={this.clearAll} 
                    clear={this.clearCompleted}
                    value={this.state.input} 
                    onSearch={this.searchList}
                    name="input"
                />

            </div>
        );
    }
}

export default TodoList;