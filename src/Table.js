import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>To-Do</th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const rows = props.todosData.map((row, index) => {
        return (
            <tr id={index}>
                <td>
                    <div>
                        <div>{row.todo}</div>
                        <Button variant="contained" color="secondary" onClick={() => props.removeTodo(index)}>
                            Delete
                            <DeleteIcon />
                        </Button>
                    </div>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {
        const { todosData, removeTodo } = this.props;
        return (
            <table>
                <TableBody todosData={todosData} removeTodo={removeTodo} />
            </table>
        );
    }
}

export default Table;
