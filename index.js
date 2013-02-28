
/**
 * Expose `pluck`.
 */

module.exports = pluck;

/**
 * Passes directly to `select` or returns a
 * function that accepts the object for that will
 * be passed along with the earlier `path` to `select`.
 *
 * @param {String} path
 * @param {Object|Array|Undefined} [object]
 * @return {Function}
 */

function pluck(path, object){
  if (arguments.length === 2) return select(path, object);
  return function(o){
    return select(path, o);
  };
}

/**
 * Decides whether a single value needs to
 * be passed to `get` or many need to be mapped
 * in the case of arrays.
 *
 * @private
 * @param {String} path
 * @param {Object|Array} object
 * @return {Mixed}
 */

function select(path, object){
  return !Array.isArray(object)
    ? get(path, object)
    : object.map(function(o){
      return get(path, o);
    });
}

/**
 * Returns value from `object` from the `path`.
 *
 * Note: purposefully loosely checking
 * against null to catch undefined and null.
 *
 * @private
 * @param {String} path
 * @param {Object} object
 * @return {Mixed}
 */

function get(path, object){
  if (!(path && object)) return;
  var parts = path.split('.');
  var len = parts.length;
  var value = object;

  for (var i = 0; i < len; i++) {
    value = value[parts[i]];
    if (value == null) break;
  }

  return value;
}