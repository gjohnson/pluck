
/**
 * Deps.
 */

var toFunction = require('to-function');

/**
 * Expose `pluck`.
 */

module.exports = pluck;

/**
 * Pluck.
 *
 * @param {String} attr
 * @param {Object|Array} obj
 * @return {Function}
 */

function pluck(attr){
  var fn = toFunction(attr);
  return function(obj){
    return Array.isArray(obj)
      ? obj.map(function(val){
        return fn(val);
      })
      : fn(obj);
  };
}