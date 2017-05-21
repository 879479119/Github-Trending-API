let Developer = require('./DevSchema')

function insert(obj) {
	obj.lastModified = new Date()
	let repo = new Developer(obj)

	repo.save(function (err, res) {
		if (err) console.log("Error:" + err)
		else console.log("Res:" + res)
	})
}

module.exports = insert