let Developer = require('./DevSchema')

function insert(obj, url) {
	obj.lastModified = new Date()
	obj.label = url
	let dev = new Developer(obj)

	return new Promise((resolve, reject)=>{
		dev.save(function (err, res) {
			if (err) reject(err)
			else resolve(res)
		})
	})
}

module.exports = insert