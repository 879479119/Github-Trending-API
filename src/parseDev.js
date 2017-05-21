let cheerio = require('cheerio')
let fs = require('fs')

function parseDev (html) {
	let $ = cheerio.load(html)
	let k = []
	$('.leaderboard-list').find('li').each((index, item)=> {
		let avatar = $(item).find('img').attr('src')
		let type = $(item).find('.leaderboard-action').has('span').length > 0 ? 'User' : 'Org'
		let result = $(item).find('.user-leaderboard-list-name').text().match(/\s+([\w\d-_]+)\s+(\((.+)\))*\s+$/)
		let repo = $(item).find('.repo').text().trim()
		let description = $(item).find('.repo-snipit-description').text().trim()
		k.push({
			avatar, type,
			name: result[1],
			full_name: result[3] || '',
			repo, description
		})
	})
	return k
}

let ht = fs.readFileSync('../store/developers.html','utf8')

console.info(parseDev(ht))

module.exports = parseDev