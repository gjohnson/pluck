
var pluck = require('..');
var fn = pluck('name.first');

describe('pluck(arr)', function(){
  var arr = [];

  arr.push({ name: { first: 'john', last: 'doe' }});
  arr.push({ name: { first: 'jane', last: 'doe' }});

  it('should return an array of the property values', function(){
    var names = fn(arr);
    names.should.include('john');
    names.should.include('jane');
  });
});

describe('pluck(object)', function(){
  var obj = { name: { first: 'john', last: 'doe' }};

  it('should return the property value', function(){
    var name = fn(obj);
    name.should.equal('john');
  });
});