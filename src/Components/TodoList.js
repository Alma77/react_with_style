import React from "react"
import '../App.css';

const Todo = props => (
    <li className="list-group-item" id="App-background">        
        <div className="row-sm container">
            <span className="col container App-list-item" onClick={() => props.setDetailView(props.todo)}>{props.todo.todo}</span>         
            <button className="btn btn-danger" onClick={()=> props.deleteTodo(props.todo)}>Delete</button>
        </div>
    </li>    
);

const TodoList = props => (
    <ul className="list-group App-list">
        {props.todoList.map(todo =>(
            <Todo todo={todo} deleteTodo={props.deleteTodo} setDetailView={props.setDetailView}
            updateTodo={props.updateTodo}/>             
        )
        )}
    </ul>
);

export default TodoList