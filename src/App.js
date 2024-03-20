import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcomee'
import React, {Component} from 'react'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

class App extends Component {
  render () {
  return (
    <div className="App">
      {/* <Greet name="Ram"  hereoName="Batman" age="12"> 
      <p>This is children</p></Greet> */}
      {/* <Greet name="Hari" heroName="Superman"> 
      <button>Action</button></Greet>
      <Greet name="Shyam" heroName="Wonderful Woman"></Greet>

      <Welcome name="Ram"  hereoName="Batman" />
      <Welcome name="Hari" heroName="Superman"/> */}
      {/* <Welcome name="Shyam" heroName="Wonderful Woman" /> */}
      
      {/* <Message /> */}
      {/* <Counter /> */}

      <FunctionClick />
     
    </div>
  )};
}

export default App;
