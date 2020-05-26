import './App.css';
import React, { Component } from 'react';
import Comment from './components/Comment';
import Show from './components/Show';


class App extends Component {
  render() {
    return (
      <div>
     <Comment></Comment>
     <Show></Show>
      </div>
    )
  }
}

export default App;
