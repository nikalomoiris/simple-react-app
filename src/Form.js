import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            todo: ''
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {

        const { todo } = this.state;

        return (
            <form>
                <label>New ToDo</label>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={this.handleChange} />
                <Button
                    variant="contained"
                    color="primary"
                    value="Submit"
                    onClick={this.submitForm}>Add</Button>
            </form>
        );
    }
}

export default Form;