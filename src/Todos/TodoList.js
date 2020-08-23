import React, { Component } from 'react';
import Todo from './Todo';
import list from './todoData'

console.log(list)
class TodoList extends Component {
    state = {
        data: list.slice()
    }
    handleChange = (id) => {
        console.log(id)
        const newData = this.state.data.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({ data: newData });
    }
    handleSort = () => {
        console.log("works")
        const sortedData = this.state.data.sort((a, b) => {
            return b.importance - a.importance
        })
        this.setState({ data: sortedData });
    }
    render() {
        return (
            <article>
                {this.state.data.map(list => <Todo
                    handleChange={() => this.handleChange(list.id)}
                    key={list.id}
                    isCompleted={list.completed}
                    task={list.task}
                    importance={list.importance}
                />)}
                <button onClick={this.handleSort}>sort By Importance</button>
            </article>
        );
    }
}

export default TodoList;