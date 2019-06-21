import React, { Component } from "react";

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
                <td>{row.todo}</td>
                <td>
                    <button onClick={() => props.removeTodo(index)}>Delete</button>
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
                <TableHeader />
                <TableBody todosData={todosData} removeTodo={removeTodo} />
            </table>
        );
    }
}

export default Table;
