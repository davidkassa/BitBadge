var request = require('request');
//var blockchain = require('blockchain');


exports.getTotalSent = function(address, callback) {
  request('http://blockchain.info/address/' + address + '?format=json', parse);

  function parse(error, response, body) {
	callback(JSON.parse(body)['total_sent']);
  }
};

exports.getTotalReceived = function(address, callback) {
  request('http://blockchain.info/address/' + address + '?format=json', parse);

  function parse(error, response, body) {
	callback(JSON.parse(body)['total_received']);
  }
};

