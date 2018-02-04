const axios = require('axios');

module.exports = {
  get: (req, res) => {
    console.log('hi');
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
  }
}