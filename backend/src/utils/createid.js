const crypto = require('crypto')

module.exports = function createId(name) {
  let id = crypto.randomBytes(2).toString('HEX');
  id = `${name.toLowerCase()}-${id}`

  return id
}