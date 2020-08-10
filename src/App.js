import React, { Component } from 'react';
import Display from './components/Display';
import './styles/App.css';

class App extends Component {
  componentDidMount() {
    console.log('Loaded');
  }

  render() {
    return (
      <React.Fragment>
        <div className='App'>App</div>
        <Display data={this.data} />
      </React.Fragment>
    );
  }
}

export default App;
