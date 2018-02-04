import React, { Component } from 'react';
import axios from 'axios';
import Coins from './components/Coins.jsx';

class App extends Component {
  state = {
    coinList: [],
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  callCoinExchange = () => {
    console.log('hello');
    axios.get('/coins')
    .then((response) => {
      console.log('im the response', response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coin Exchange</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <button onClick={this.callCoinExchange.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default App;