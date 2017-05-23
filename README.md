# Github-Trending-API
The official v3 API don't consist of the 'trending' and 'explore', here is an patch API for that :lollipop:

**The data will update every one hour**

## Usage 

the Ali server doesn't allow me to provide service without being recorded, so the URL starts with IP address

#### Trending
+ `http://120.24.49.153:3000/trending` - repos in all languages
+ `/trending/developers` - developers in all languages
+ `/trending/:language` - you must make sure the letters of param `language` are all lowercase, and space should be replaced by '-'
+ `/trending/developers/:language` - the same
+ `/trending/:language?span=[daily,weekly,monthly]` - you can pass one of them to get data in the exact period you need

Built with `express` + `cheerio` + `mongodb`

here is the preview format of repo:
```json
[
    {
        "repo": "/gentilkiwi/wanakiwi",
        "description": "Automated wanadecrypt with key recovery if lucky",
        "language": "C",
        "star": 396,
        "fork": 116,
        "today": 104,
        "user": [
            {
                "contributor": "msuiche",
                "avatar": "https://avatars1.githubusercontent.com/u/1621145?v=3&s=40"
            },
            {
                "contributor": "gentilkiwi",
                "avatar": "https://avatars2.githubusercontent.com/u/2307945?v=3&s=40"
            }
        ],
        "lastModified": "2017-05-21T16:22:40.402Z",
        "label": "/trending/c"
    }
]
```
If any exception happens, you will get an empty array

### Addition

Welcome to star, fork ~