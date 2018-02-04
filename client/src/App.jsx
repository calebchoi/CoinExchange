import React, { Component } from 'react';
import axios from 'axios';
import CoinList from './components/CoinList.jsx';
import FavoriteList from './components/FavoriteList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coinList: [],
      favoriteList: {},
    }
  };

  componentWillMount() {
    axios.get('/coins')
    .then((response) => {
      this.setState({
        coinList: response.data,
      });
    })
    .catch(err => console.log(err));
  }

  addFavorite = (coin) => {
    const favorites = Object.assign({}, this.state.favoriteList);
    favorites[coin.id] = coin;
    this.setState({
      favoriteList: favorites,
    });
  }

  removeFavorite = (id) => {
    const favorites = Object.assign({}, this.state.favoriteList);
    delete favorites[id];
    this.setState({
      favoriteList: favorites,
    });
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
        <FavoriteList favoriteList={this.state.favoriteList} removeFavorite={this.removeFavorite} />
        <CoinList coinList={this.state.coinList} addFavorite={this.addFavorite} />
      </div>
    );
  }
}

export default App;