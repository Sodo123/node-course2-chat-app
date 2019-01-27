var expect = require('expect');

var {generateMessage} = require('./message');

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
