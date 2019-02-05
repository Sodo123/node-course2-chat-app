var moment = require('moment');

var createdAt = 1234;
var date = new moment(createdAt);
//date.add(1,'year');
//console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));
