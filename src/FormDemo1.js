import React, { Component } from 'react';
import { Form } from 'reactstrap';

export default class FormDemo1 extends Component {
  state = { userName: '', city:'' }
  onChangeHandler = (event) => {
    // this.setState({ userName: event.target.value })
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value})

  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <h3> user name</h3>
          <input name= "userName" onChange={this.onChangeHandler} type="text" ></input>
          <h3> user name is {this.state.userName}</h3>
          <h3> city</h3>
          <input name= "city" onChange={this.onChangeHandler} type="text" ></input>
          <h3> city is {this.state.city}</h3>
          <input type="submit" value="save" ></input>
        </Form>
      </div>
    )
  }
}
