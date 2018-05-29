import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then ( res => {
      this.setState({
          cars: res.data
      })
    })
  }

  render() {
    const kars = this.state.cars.map (e => {
      return (
        <div key= {e.id}>
          <p>Make: {e.make}</p>
        </div>
      )
    })
    return (
      <div className={this.props.cars}>
        <button onClick={this.getCars}>Get kars</button>
        {kars}
      </div>
    );
  }
}

export default App;
