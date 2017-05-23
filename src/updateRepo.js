let Promise = require('bluebird')
let getPageInHtml = require('./download')
let parseRepo = require('./parseRepo')
let addRepo = require('./addRepo')
let removeRepo = require('./removeRepo')

module.exports = function ({url, span}) {
	return getPageInHtml(url, span).then(html=>{
		let arr = parseRepo(html, span)
		return removeRepo({url, span}, arr)
	}).then(result=>{
		result.map((item)=>{
			addRepo(item, url)
		})
		return result
	})
}