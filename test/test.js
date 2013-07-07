
var pluck = require('..');
var fn = pluck('name.first');

describe('pluck(path)(array)', function(){
  var arr = [];

  arr.push({ name: { first: 'john', last: 'doe' }});
  arr.push({ name: { first: 'jane', last: 'doe' }});

  it('should return an array of the property values', function(){
    var names = fn(arr);
    names.should.include('john');
    names.should.include('jane');
  });
});

describe('pluck(path)(object)', function(){
  var obj = { name: { first: 'john', last: 'doe' }};

  it('should return the property value', function(){
    var name = fn(obj);
    name.should.equal('john');
  });
});

describe('pluck(path, object)', function(){
  it('should return the property value', function(){
    var name = pluck('name.first', {
      name: {
        first: 'john',
        last: 'doe'
      }
    });

    name.should.equal('john');
  });
});

describe('pluck(path-with-index, object)', function(){
  it('should return the property value', function(){
    var name = pluck('name[1].first', {
      name: [
        {},
        {
         first: 'john',
          last: 'doe'
        }
      ]
    });

    name.should.equal('john');
  });
});

describe('pluck(path, array)', function(){
  it('should return the property values as an array', function(){
    var names = pluck('name.first', [
      { name: { first: 'john', last: 'doe' }},
      { name: { first: 'jane', last: 'doe' }}
    ]);

    names.should.include('john');
    names.should.include('jane');
  });
});