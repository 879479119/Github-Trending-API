let Promise = require('bluebird')
let getPageInHtml = require('./download')
let parseDev = require('./parseDev')
let addDev = require('./addDev')
let removeDev = require('./removeDev')

module.exports = function ({url, span}) {
	return getPageInHtml(url, span).then(html=>{
		let arr = parseDev(html, span)
		return removeDev({url, span}, arr)
	}).then(result=>{
		result.map((item)=>{
			addDev(item, url)
		})
		return result
	})
}