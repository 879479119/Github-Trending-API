let Dev = require('./DevSchema')

function remove({url, span}, arr) {

	return new Promise((resolve, reject)=>{
		Dev.remove({ label: url, [span]: {$exists: true} }, function(err, res){
			if (err) reject(err)
			else resolve(arr)
		})
	})
}

module.exports = remove