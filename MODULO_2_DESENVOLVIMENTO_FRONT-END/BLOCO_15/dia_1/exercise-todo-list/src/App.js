import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.onSelectedTask = this.onSelectedTask.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTask() {
    document.querySelector('button').disabled = true;

    this.setState((state) => {
      const selectedTask = document.querySelector('.selected');
      const index = state.listTodo.indexOf(selectedTask.textContent);
      state.listTodo.splice(index, 1);

      return { listTodo: state.listTodo }
    });
  }

  onSelectedTask(event) {
    document.querySelector('button').disabled = false;
    event.target.classList.toggle('selected');
  }

  componentDidMount() {
    document.querySelector('button').disabled = true;
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul data-testid="ul">
            {
              listTodo.map((todo, index) => (
                <li key={index + todo}>
                  <Item content={todo} onSelectedTask={this.onSelectedTask} />
                </li>
              ))
            }
          </ul>
        }
        <button
          type="button"
          data-testid="id-remove"
          value="Remover"
          onClick={this.removeTask}
        >Remover</button>

      </div>
    );
  }
}
export default App;
