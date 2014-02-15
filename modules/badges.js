
Create the first badge
*/

var request = require('request');


exports.createBadge = function(callback) {
  request(' ', parse);

  function parse(error, response, body) {
	callback(JSON.parse(body)['badge created']);
  }
};

