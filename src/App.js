import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import fire from './fire';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends Component {
    state = {
        todos: []
    };

    componentWillMount() {
        let todosRef = fire.database().ref('todos').orderByKey().limitToLast(100);
        todosRef.on('child_added', snapshot => {
            let todo = {
                value: snapshot.val(),
                key: snapshot.key
            }
            this.setState({ todos: [...this.state.todos, todo] });
        })
    }

    removeTodo = (index) => {
        const { todos } = this.state;

        let todosRef = fire.database().ref('todos');
        todosRef.child(todos[index].key).remove().then(
            this.setState({
                todos: todos.filter((todo, i) => {
                    return i !== index
                })
            })
        );
    };

    handleSubmit = todo => {
        fire.database().ref('todos').push(todo);
        this.setState({todos: [...this.state.todos, todo]})
    }

    render() {
        const { todos } = this.state;

        return (
            <Card>
                <CardContent>
                    <Form handleSubmit={this.handleSubmit} />
                    <Table todosData={todos.map(todo => {
                        return todo.value;
                    })} removeTodo={this.removeTodo} />
                </CardContent>
            </Card>
        )
    };
}

export default App;