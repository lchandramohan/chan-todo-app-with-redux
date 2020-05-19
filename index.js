import React, { Component } from 'react';
import { render } from 'react-dom';
import ToDoList from './ToDoList';
import {Provider} from 'react-redux';
import {store} from './store';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <div>
          To Do List with Redux
        </div>
        <ToDoList />
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
