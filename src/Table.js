import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const TableBody = (props) => {
    const rows = props.todosData.map((row, index) => {
        return (
            <ListItem id={index}>
                <ListItemText primary={row.todo} />
                <Button variant="contained" color="secondary" onClick={() => props.removeTodo(index)}>
                    Delete
                    <DeleteIcon />
                </Button>
            </ListItem>
        );
    });

    return <tbody>{rows}</tbody>
};

class Table extends Component {
    render() {

        const { todosData, removeTodo } = this.props;
        return (
            <List component="nav" aria-label="Todos List">
                <TableBody todosData={todosData} removeTodo={removeTodo} />
            </List>
        );
    }
}

export default Table;
