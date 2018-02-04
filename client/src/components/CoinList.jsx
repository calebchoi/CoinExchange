import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin.jsx';

const CoinList = props => (
  <div className="coinList">
    {props.coinList.map(coin => (
      <Coin
        coin={coin}
        key={coin.id}
      />
    ))}
  </div>
);

CoinList.propTypes = {
  coinList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoinList;