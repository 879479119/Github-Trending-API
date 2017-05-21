let express = require('express');
let router = express.Router();
let getRepo = require('../src/getRepo')

/* GET home page. */
router.get('/trending', function(req, respond, next) {
  getRepo().then(res => {
  	respond.send(res)
  }).catch(err => {
  	console.error(err)
	respond.send([])
  })
});
router.get('/trending/:lang', function(req, respond, next) {
	getRepo('/trending/'+req.params.lang).then(res => {
		respond.send(res)
	}).catch(err => {
		console.error(err)
		respond.send([])
	})
});
router.get('/trending/:lang/:develop', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
module.exports = router;
