import React from 'react';
import PropTypes from 'prop-types';

const Coin = props => {
  console.log(props.coin);
  const { name, price_usd, price_btc, rank, percent_change_24h } = props.coin;
  return (
    <div>
      <ul className="coin">
        <li>{rank}</li>
        <li>{name}</li>
        <li>{price_usd}</li>
        <li>{price_btc}</li>
        <li>{percent_change_24h}</li>
      </ul>
    </div>
  );
};

Coin.propTypes = {

};

export default Coin;