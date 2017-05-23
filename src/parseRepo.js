let cheerio = require('cheerio')
let fs = require('fs')
// let addRepo = require('./addRepo')

function parseRepo (html, span) {
	let $ = cheerio.load(html)
	let k = []

	//empty content
	if($('.blankslate').length !== 0){
		return []
	}

	$('.repo-list').find('li').each((index, item)=> {
		let repo = $(item).find('.d-inline-block').find('a').attr('href').trim()
		let description = $(item).find('.py-1').find('p').text().replace(/\n\s+(.+)\n\s+/,'$1')
		// console.info($(item).find('.mr-3').text())
		let result = $(item).find('.mr-3').text().match(/\s+([\w-_,+?: ]+)(\s+)+([0-9,kK.]+)(\s+)+([0-9,kK.]*)(\s+)+/)
		let p = []
		$(item).find('.no-underline').find('img').each((i, t)=>{
			p.push({
				contributor: $(t).attr('title'),
				avatar: $(t).attr('src')
			})
		})

		//no star added situation
		let temp = $(item).find('.float-right').text().match(/([\d,]+)/)
		let count = temp === null ? 0 : temp[0]

		//unknown languages
		if(result[5] === '' && result[1].match(/\w/) === null){
			result[5] = result[3]
			result[3] = result[1]
			result[1] = ''
		}

		k.push({
			repo, description,
			language: result[1].trim(),
			star: + result[3].replace(',','').replace('k','000'),
			fork: + result[5].replace(',','').replace('k','000'),
			[span]: temp === null ? 0 : + count.replace(',',''),
			user: p
		})
	})
	return k
}
//
// let ht = fs.readFileSync('../store/ampl.html','utf8')
// // console.info(parseRepo(ht,'daily'))
// parseRepo(ht,'234')
//
// parseRepo(ht).map(addRepo)
// addRepo()

module.exports = parseRepo