let Developer = require('./DevSchema')

function getByConditions(){
	Developer.find({}, function(err, res){
		if (err) console.log("Error:" + err)
		else console.log("Res:" + res.length)
	})
}

module.exports = getByConditions

getByConditions()