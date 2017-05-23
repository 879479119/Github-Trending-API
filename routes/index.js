let express = require('express');
let router = express.Router();
let getRepo = require('../src/getRepo')
let getDev = require('../src/getDev')

/* GET home page. */
router.get('/trending', function (req, respond, next) {
	/**
	 * span is one of undefined, 'daily', 'weekly', 'monthly'
	 * @type {String}
	 */
	let span = req.query.span || 'daily'

	getRepo({
		url: '',
		span
	}).then(res => {
		respond.send(res)
	}).catch(err => {
		console.error(err)
		respond.send([])
	})
});
router.get('/trending/:lang', function (req, respond, next) {
	let span = req.query.span || 'daily'
	getRepo({
		url: '/trending/' + req.params.lang,
		span
	}).then(res => {
		respond.send(res)
	}).catch(err => {
		console.error(err)
		respond.send([])
	})
});



router.get('/trending/developers', function (req, respond, next) {
	let span = req.query.span || 'daily'

	getDev({
		url: '/trending/developers',
		span
	}).then(res => {
		respond.send(res)
	}).catch(err => {
		console.error(err)
		respond.send([])
	})
});
router.get('/trending/developers/:lang', function (req, respond, next) {
	let span = req.query.span || 'daily'
	getDev({
		url: '/trending/developers/' + req.params.lang,
		span
	}).then(res => {
		respond.send(res)
	}).catch(err => {
		console.error(err)
		respond.send([])
	})
});
module.exports = router;
