# Github-Trending-API
The official API(v3) don't consist of the fields 'trending' and 'explore', here is an patch API for that :lollipop:

**The data will update every one hour, and it updates lazily which means that you may wait for a long time if you are try querying a language that nobody has accessed in the last one hour**

## Usage 

Just copy the IP adress and paste it in your application, ~~I cannot afford a domain, maybe~~.

#### Trending
+ `http://120.24.49.153:3000/trending` - repos in all languages
+ `/trending/developers` - developers in all languages
+ `/trending/:language` - you must make sure the letters of param `language` are all lowercase, and space should be replaced by '-'
+ `/trending/developers/:language` - the same
+ `/trending/:language?span=[daily,weekly,monthly]` - you can pass one of them to get data in the exact period you need

Built with `express` + `cheerio` + `mongodb`

You can use CORS to get data in the browser

**Repository Format**
```json
[
    {
        "repo": "/facebook/prepack",
        "description": "Prepack is a partial evaluator for JavaScript. Prepack rewrites a JavaScript bundle, resulting in JavaScript code that executes more efficiently.",
        "language": "JavaScript",
        "star": 9138,
        "fork": 225,
        "monthly": 9128,
        "user": [
            {
                "contributor": "NTillmann",
                "avatar": "https://avatars0.githubusercontent.com/u/6457462?v=3&s=40"
            },
            {
                "contributor": "hermanventer",
                "avatar": "https://avatars0.githubusercontent.com/u/4325251?v=3&s=40"
            },
            {
                "contributor": "sebmarkbage",
                "avatar": "https://avatars0.githubusercontent.com/u/63648?v=3&s=40"
            },
            {
                "contributor": "cblappert",
                "avatar": "https://avatars0.githubusercontent.com/u/3744743?v=3&s=40"
            },
            {
                "contributor": "dkrew0213",
                "avatar": "https://avatars1.githubusercontent.com/u/7864184?v=3&s=40"
            }
        ],
        "lastModified": "2017-05-23T06:46:51.571Z",
        "label": ""
    }
]
```

**Developer Format**
```json
[
    {
        "avatar": "https://avatars0.githubusercontent.com/u/69631?v=3&s=192",
        "type": "Org",
        "name": "facebook",
        "monthly": true,
        "full_name": "Facebook",
        "repo": "react",
        "description": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        "lastModified": "2017-05-23T06:43:33.797Z",
        "label": "/trending/developers"
    }
]
```


If any exception happens, you will get an empty array

### Addition

Welcome to star, fork ~
