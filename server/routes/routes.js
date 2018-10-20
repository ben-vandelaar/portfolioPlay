const router = require("express").Router()
let {getImages} = require("../db/images");

router.get('/', (req, res) => {
  getImages()
  .then(image => {
    res.json(image)
  })
  .catch(err => res.status(500)
    .send({
      err: err,
      message: "Server Error"
    })
  )})

module.exports = router
  
  
  module.exports = router