let mongoose = require('./mongo')
let Schema = mongoose.Schema

/**
 * label is the key value
 * all - represents the default 'all languages'
 * '' - void represents no language detection
 */

const RepoSchema = new Schema({
	label: {type: String},
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