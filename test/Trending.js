let mongoose = require('../src/mongo')
let Schema = mongoose.Schema

const RepoSchema = new Schema({
	repo : {type: String },
	description: {type: String},                        
	language: {type: String},
	fork: {type: Number},                        
	today: {type: Number},                        
	week: {type: Number},                        
	star : {type: Number},
	user: {type: Object},
	lastModified: {type: Date},
})

module.exports = mongoose.model('Repo', RepoSchema, 'repos')

let Repo = mongoose.model('Repo')

function insert(obj) {
	obj.lastModified = new Date()
	let repo = new Repo(obj)

	repo.save(function (err, res) {
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}
	})
}

function getByConditions(){
	let wherestr = {'username' : 'Tracy McGrady'};

	Repo.find({}, function(err, res){
		if (err) {
			console.log("Error:" + err);
		}
		else {
			console.log("Res:" + res);
		}
	})
}

insert()

getByConditions()