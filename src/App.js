import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcomee'
import React, {Component} from 'react'

class App extends Component {
  render () {
  return (
    <div className="App">
      <Greet />
      <Welcome />
     
    </div>
  )};
}

export default App;
