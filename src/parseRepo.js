let cheerio = require('cheerio')
let fs = require('fs')
// let addRepo = require('./addRepo')

function parseRepo (html) {
	let $ = cheerio.load(html)
	let k = []
	$('.repo-list').find('li').each((index, item)=> {
		let repo = $(item).find('.d-inline-block').find('a').attr('href').trim()
		let description = $(item).find('.py-1').find('p').text().replace(/\n\s+(.+)\n\s+/,'$1')
		let result = $(item).find('.mr-3').text().match(/\s+([\w-_+?: ]+)(\n+\s+)+([0-9,kK.]+)(\n+\s+)+([0-9,kK.]+)(\n+\s+)+/)
		let p = []
		$(item).find('.no-underline').find('img').each((i, t)=>{
			p.push({
				contributor: $(t).attr('title'),
				avatar: $(t).attr('src')
			})
		})
		let today = +$(item).find('.float-right').text().match(/([\d,]+)/)[0]
		k.push({
			repo, description,
			language: result[1].trim(),
			star: + result[3].replace(',','').replace('k','000'),
			fork: + result[5].replace(',','').replace('k','000'),
			today,
			user: p
		})
	})
	return k
}

// let ht = fs.readFileSync('../store/unknown.html','utf8')
//
// parseRepo(ht).map(addRepo)
// addRepo()

module.exports = parseRepo