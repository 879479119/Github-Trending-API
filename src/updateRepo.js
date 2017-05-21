let Promise = require('bluebird')
let getPageInHtml = require('./download')
let parseRepo = require('./parseRepo')
let addRepo = require('./addRepo')
let removeRepo = require('./removeRepo')

module.exports = function (url) {
	return getPageInHtml(url).then(html=>{
		let arr = parseRepo(html)
		return removeRepo(url, arr)
	}).then(result=>{
		result.map((item)=>{
			addRepo(item, url)
		})
		return result
	})
}