const db = require('./connection');

function getImages() {
  return db('Images')
}
module.exports = {
 getImages
}