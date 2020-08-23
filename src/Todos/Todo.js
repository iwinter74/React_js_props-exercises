import React, { Component } from 'react';


class Todo extends Component {
    state = {}
    render() {
        return (
            <li>
                <span>{this.props.importance}</span>
                <input onChange={() => this.props.handleChange(this.props.id)} type="checkbox" name="" id="" checked={this.props.isCompleted} />
                <span>{this.props.task}</span>

            </li>
        );
    }
}

export default Todo;