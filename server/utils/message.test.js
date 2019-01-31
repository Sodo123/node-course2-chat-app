var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('shoult generate correct message object', () => {

    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from,text});
    // stores res in varibale
    // assert from match
    // assert text match
    /// assert recatedAt is number
  });
});

describe('generateLocationMessage', () => {
  if('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;

    var url = 'https://www.goole.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
