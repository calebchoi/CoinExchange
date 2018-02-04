import React, { Component } from 'react';
import axios from 'axios';
import CoinList from './components/CoinList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinList: [],
    }
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  callCoinExchange = () => {
    axios.get('/coins')
    .then((response) => {
      this.setState({
        coinList: response.data,
      });
    })
    .catch(err => console.log(err));
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
        <CoinList coinList={this.state.coinList} />
      </div>
    );
  }
}

export default App;