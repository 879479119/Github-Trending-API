let Repo = require('./RepoSchema')

function remove(url, arr) {

	return new Promise((resolve, reject)=>{
		Repo.remove({ label: url }, function(err, res){
			if (err) reject(err)
			else resolve(arr)
		})
	})
}

module.exports = remove