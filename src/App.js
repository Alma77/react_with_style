import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';
import TodoList from'./Components/TodoList';
import TodoForm from './Components/TodoForm';
import DetailView from './Components/DetailView';
import FilterForm from './Components/FilterForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      todoList: [
        {
          todo: "Wake Up",
          time: "8:00am",
          description: "Get out of bed and get ready for the day."
        },
        {
          todo: "Eat Breakfast",
          time: "8:30am",
          description: "Make Eggs, Bacon, and Toast."
        },
        {
          todo: "Work out",
          time: "9:30",
          description: "Work out for the muscles"
        },
        {
          todo: "Go To School",
          time: "10:30am",
          description: "Work out for the Brain."
        },
        {
          todo: "Free Time",
          time: "4:00pm",
          description: "Whatever I want to do."
        }
      ],
      filteredList: [],
      isFiltered: false,
      showDetail: false,
      showAddTodo: false,
      detailView: {
        todo: "",
        time: "",
        description: "",
      },
    };
  }

  addTodo = todo => {
    this.setState(prevState => ({
        todoList: [...prevState.todoList, todo],
        showAddTodo: false,
    }));
  };

  deleteTodo = value => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo !== value),
      isFiltered: false,
    }));
  };

  filterTodo = value => {
    this.setState(prevState => ({
      filteredList: prevState.todoList.filter(todo => todo.todo.toLowerCase().includes(value.toLowerCase())),
      isFiltered: true,
    }))
  };

  setDetailView = value => {
    this.setState(this.detailView = {
        todo: value.todo,
        time: value.time,
        description: value.description
      },
      this.showDetail = true,
    )
    alert(`showDetail has value: ${this.showDetail} and detailView has current values: ${this.detailView.todo}, ${this.detailView.time}, and ${this.detailView.description}`)
  };

  resetFilter = () => {
    this.setState({isFiltered: false});
  };

  HideDetail = () => {
    this.setState({showDetail: false});
  };

  ShowAddTodoForm = () => {
    this.setState({showAddTodo: true});
  }

  HideAddTodoForm = () => {
    this.setState({showAddTodo: false});
  }

  render()
  {
    let form;
    let detail;
    if(this.state.showAddTodo)
    {
      form = <div>
        <div className="App-form">
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <button className="App-button" onClick={this.HideAddTodoForm} className="btn btn-danger">Hide Form</button>
      </div>
    }
    else
    {      
      form = <div className="App-button">
        <button onClick={this.ShowAddTodoForm} className="btn btn-primary">Add Todo Item</button>
      </div>
    }

    if (this.state.showDetail) {
      detail = <div className="App-form">
        <DetailView detailView={this.state.detailView}/>
        <button className="App-button" onClick={this.HideDetail} className="btn btn-danger">Hide Detail</button>
      </div>

    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <div className="App-main">
          <FilterForm className="container" filterTodo={this.filterTodo} resetFilter={this.resetFilter}/>
          <TodoList className="container" todoList={this.state.isFiltered ? this.state.filteredList : this.state.todoList} deleteTodo={this.deleteTodo} setDetailView={this.setDetailView} />
          {detail}
          {form}
        </div>
        
      </div>
    );
  }  
}
export default App;
