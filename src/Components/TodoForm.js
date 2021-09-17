import React from "react";

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItem: "",
            todoTime: "",
            todoDescription: ""
        };
    }

    handleItemChange = (event) => {
        this.setState({todoItem: event.target.value})
    };

    handleTimeChange = (event) => {
        this.setState({todoTime: event.target.value})
    };

    handleDescriptionChange = (event) => {
        this.setState({todoDescription: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            todo: this.state.todoItem,
            time: this.state.todoTime,
            description: this.state.todoDescription
        }
        this.props.addTodo(newTodo);
    }

    render(){
        return (
            <form onSubmit={event => this.handleSubmit(event)}> 
                <h2>Add Item Form:</h2>
                <div className="form-group">
                    <label>Todo Item:</label>
                    <input
                        className="form-control"
                        placeholder="ex: Played Basketball" 
                        type="text" 
                        value={this.state.todoItem}
                        onChange={event => this.handleItemChange(event)}
                    />
                </div>
                <div className="form-group">
                    <label>Time:</label>
                    <input 
                        className="form-control"
                        type ="text"
                        placeholder="example: 9:00am"
                        value={this.state.todoTime}
                        onChange={event => this.handleTimeChange(event)}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input 
                        className="form-control"
                        type ="text"
                        placeholder="Add description of todo Item" 
                        value={this.state.todoDescription}
                        onChange={event => this.handleDescriptionChange(event)}   
                    />
                </div>
                <input className="btn btn-primary App-button" type="submit" value="Submit" />
            </form>
        );
    }
}

export default TodoForm;