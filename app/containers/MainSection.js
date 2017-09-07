import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

class MainSection extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <h2>Main Section</h2>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = {
    fetchTodos
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(MainSection);