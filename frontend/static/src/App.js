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
      input: ''
    }

    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/todos/')
    .then(response => response.json())
    .then(data => this.setState({todos: data}));
  }

  toggleCompletion(todo) {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);

    todos[index].is_complete = !todos[index].is_complete

    this.setState({todos});

    const id = todo.id;
    fetch('api/v1/todos/')
    .then(response => response.json())
    .then(data => this.setState({todos: data}));

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
        <h1>Hello</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default App;
