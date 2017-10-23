import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, clearAllTodos } from '../actions/todos';
import axios from 'axios';
import _ from 'lodash';

class MainSection extends Component {
  constructor() {
    super();

    this.state = {
      todoName: '',
      competed: []
    }
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps, nextState);
  }

  addNewTodo() {
    this.props.addTodo(this.state.todoName);
    this.setState({ todoName: '' });
  }

  makeComplete(id) {
    this.props.setComplete(id);

    // let { todos } = this.props;
    // let selected = this.state.competed;

    // if (_.includes(this.state.competed, id)) {
    //   selected = this.state.competed.filter(itemId => { return itemId !== id });
    // } else {
    //   selected.push(id);
    // }

    // this.setState({ competed: selected })
  }

  renderTodos() {
    let { todos } = this.props;
    let items = [];

    if (!todos)
      return <p>'You dont have any todos, please add it'</p>

    items = todos.map(todo => {
      return <li key={todo.id}>
      <input onChange={() => this.makeComplete(todo.id)} type='checkbox' checked={todo.competed} />
      <span>{todo.text}</span>
      </li>
    })

    return (
      <ul>{items}</ul>
    )
  }

  render() {

    return (
      <div className='container'>
        <h3>Main Section</h3>

        <input
          className='input'
          onChange={(event) => { this.setState({ todoName: event.target.value }) }}
          value={this.state.todoName}
          placeholder='todo name'
        />
        <button
          className='btn btn-default'
          onClick={() => { this.addNewTodo() }}>
          Add new todo
        </button>
        {this.renderTodos()}

        <button className='btn btn-default' onClick={() => { this.props.clearAllTodos() }}>Clear All Todos</button>  
      </div>
    )
  }
}


const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  clearAllTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);