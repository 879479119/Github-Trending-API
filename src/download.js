let Promise = require('bluebird')
let https = require("https")
let iconv = require('iconv-lite')
let fs = require('fs')
/**
 * @description call this function every one hour is enough, because it takes much time to load the images
 * @return {Object} what the explore page shows
 */
function getPageInHtml(relativeUrl = "/trending", span){

	if(relativeUrl === '') relativeUrl = "/trending"
	
	let option = {
		hostname: "github.com",
		path: relativeUrl+'?since='+span,
	}

	return new Promise(function (resolve, reject) {
		let html = ""
		let req = https.request(option, function(res) {
			res.on("data", function(chunk) {
				html += iconv.decode(chunk, "utf8")
				console.log(Date.now())
			}).on("end", function () {
				resolve(html)
			})
		}).on("error", function(e) {
			reject(e.message)
		})
		req.end()
	}).then(function (html) {
		let file = relativeUrl.match(/^((\/[\w-]+)+)/)
		if(file === null) throw Error("url should looks like '/a/b', but even '/a/a/a-c/s/?p=1#2222' works")
		// let param = relativeUrl.split('?')[1]
		// let write = fs.createWriteStream(__dirname+`/../store${file[2] + (param || "")}.html`)
		// write.write(html)
		// console.log("Over")
		// write.close()
		return html
	})
}

module.exports = getPageInHtml

// getPageInHtml("/trending/unknown").then(function (e) {
// 	console.log(e)
// })