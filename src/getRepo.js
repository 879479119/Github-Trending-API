let Repo = require('./RepoSchema')
let Promise = require('bluebird')
let updateRepo = require('./updateRepo')

function getByConditions({url= '', span='daily'}){
	return new Promise((resolve, reject) => {
		Repo.find({
				label: url ,
				[span]: {
					$exists: true
				}
			}, function(err, res){
			if (err) reject(err)
			else resolve(res)
		})
	}).then(res=>{
		let interval = 1000 * 60 * 60
		if(res.length === 0 || Date.now() - new Date(res[0].lastModified).getTime() > interval){
			return updateRepo({url, span})
		}else{
			return res
		}
	})

}

module.exports = getByConditions

