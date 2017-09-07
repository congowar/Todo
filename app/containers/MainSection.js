import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos, addTodo } from '../actions/todos';
import axios from 'axios';

class MainSection extends Component {
    constructor() {
        super();

        this.state = {
            todos: []
        }
    }

    componentWillMount() {
        this.props.fetchTodos();
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps, nextState);
    }

    renderTodos() {
        let { todos } = this.props;

        console.log(todos);

        if (!todos)
            return <p>'You dont have any todos, please edit'</p>

        return (
            <ul>
                {
                    (() => (
                        todos.map(todo => {
                            return <li key={todo.id}>{todo.text}</li>
                        })
                    ))()
                }
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h2>Main Section</h2>
                <button onClick={() => { this.props.addTodo('I want go home') }}>Add new todo</button>

                {this.renderTodos()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    fetchTodos,
    addTodo
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainSection);