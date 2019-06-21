import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import fire from './fire';

class App extends Component {
    state = {
        todos: []
    };

    componentWillMount() {
        let todosRef = fire.database().ref('todos').orderByKey().limitToLast(100);
        todosRef.on('child_added', snapshot => {
            let todo = snapshot.val();
            this.setState({ todos: [...this.state.todos, todo] });
        })
    }

    removeTodo = (index) => {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter((todo, i) => {
                return i !== index
            })
        })
    };

    handleSubmit = todo => {
        fire.database().ref('todos').push(todo);
        this.setState({todos: [...this.state.todos, todo]})
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="container">
                <Table todosData={todos} removeTodo={this.removeTodo} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    };
}

export default App;