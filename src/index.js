import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

const Li = (props) => <li>{props.login}</li>;

class App extends C {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://kodaktor.ru/j/users')
      .then(d => d.text())
      .then(x => this.setState({ data: JSON.parse(x).users }));
  }

  render() {
    return (<ul>
      {this.state.data.map((item, i) => <Li key={i} login={item.login}/>)}
    </ul>);
  }
}

r(
  <App/>,
  document.querySelector('.cont')
);
