var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

router.get('/hello-world', function (req, res) {
  res.render('hello_world', {'message' : 'Hello world'});
});

router.get('/C110A-', function (req, res) {
  var url = utils.getLatestRelease()
  res.render('C110A-section-1', { 'releaseURL': url })
})
