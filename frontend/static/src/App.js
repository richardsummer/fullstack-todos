import React, { Component } from 'react';
import './App.css';

// class Item extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({[event.target.name]: })
//   }
//
//   render() {
//     return(
//       <li>
//         <p>{this.state.text}</p>
//         <input type="checkbox" name="is_complete" checked={this.state.is_complete} onChange={this.handleChange}/>
//       </li>
//     )
//   }
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      text: ''
    }

    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // save new todo to database

    // take the todo that got created and add it to state in the App component (the todos value)
  }

  handleChange(event) {

  }

  componentDidMount() {
    fetch('api/v1/todos/')
    .then(response => response.json())
    .then(data => this.setState({todos: data}));
  }

  toggleCompletion(todo) {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);

    todo.is_complete = !todo.is_complete;
    todos[index] = todo;

    this.setState({todos}, () => console.log(this.state.todos));


    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }

    fetch(`api/v1/todos/${todo.id}/`, options)
      .then(response => response.json())
      .then(data => console.log(data));

  }

  render() {
    const todos = this.state.todos.map(todo =>
      <li key={todo.id}>
        <p>{todo.text}</p>
        <input type="checkbox" name="is_complete" checked={todo.is_complete} onChange={() => this.toggleCompletion(todo)}/>
      </li>
    );
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='text'>Text</label>
          <input id="text" type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <button type="submit">Add todo</button>
        </form>
        <h1>Hello</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default App;
