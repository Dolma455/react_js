import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         Comments:''
      }
    }

    handleUsernameChange=(event)=> {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange=(event) =>{
        this.setState({
            Comments: event.target.value
        })
    }

  render() {
    return (
      <form>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
        </div>
      </form>
    )
  }
}

export default Form