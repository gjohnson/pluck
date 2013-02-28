 [![Build Status](https://secure.travis-ci.org/gjohnson/pluck.png?branch=master)](http://travis-ci.org/gjohnson/pluck)

# pluck

  pluck property path from arrays or an object.

## Installation

*component*

```sh
  $ component install gjohnson/pluck
```

or

*npm*

```sh
  $ npm install pluck
```

## Example

Pluck from arrays.

```javascript
var pluck = require('pluck');

var firstName = pluck('name.first');

var items = [
  { name: { first: 'john', last: 'doe' } }
];

var names = firstName(items);
```

Pluck from plain objects.

```javascript
var pluck = require('pluck');

var firstName = pluck('name.first');

var item = {
  name: {
    first: 'john',
    last: 'doe'
  }
};

var name = firstName(item);
```

## License

MIT
