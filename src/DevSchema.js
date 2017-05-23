let mongoose = require('./mongo')
let Schema = mongoose.Schema

const DevSchema = new Schema({
	label: {type: String},
	avatar : {type: String },
	name: {type: String},
	full_name: {type: String},
	type: {type: String},
	daily: {type: Number},
	weekly: {type: Number},
	monthly: {type: Number},
	repo: {type: String},
	lastModified: {type: Date},
})

module.exports = mongoose.model('Developer', DevSchema, 'developers')