import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return this.state.isLoggedIn ?(<div>Welcome Dolma</div>):(<div>Welcome Guest</div>)
    // return this.state.isLoggedIn && <div>Welcome Dolma</div>
    

    // let message
    // if(this.state.isLoggedIn) {
    //     message=<div>Welcome Dolma</div>
    // }
    // else {
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
   
  }
}

export default UserGreeting
