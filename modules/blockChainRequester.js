
var request = require('request');
var blockchain = require('blockchain');


exports.getTotalSent = function(address, callback) {
  request('http://blockchain.info/address/' + address + '?format=json', parse);

  function parse(error, response, body) {
	callback(JSON.parse(body)['total_sent']);
  }
};

exports.subscribeToAddress = function(address, callback) {
	var bc = new blockchain();
	bc.subscribe('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',function(result) {
		console.log(result);
	});  
};
