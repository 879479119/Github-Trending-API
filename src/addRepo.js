let Repo = require('./RepoSchema')

function insert(obj, url) {
	obj.lastModified = new Date()
	obj.label = url
	let repo = new Repo(obj)

	return new Promise((resolve, reject)=>{
		repo.remove({ label: url }, function(err, res){
			if (err) reject(err)
			else {
				repo.save(function (err, res) {
					if (err) reject(err)
					else resolve(res)
				})
			}
		})
	})
}

module.exports = insert