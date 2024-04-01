import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcomee'
import React, {Component} from 'react'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import styles from './appStyles.module.css'
import './appStyles.css'
import Form from './Form';
import LifecycleA from './components/LifecycleA';

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

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* < Form /> */}
      <LifecycleA />
     
    </div>
  )};
}

export default App;
