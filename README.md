# Github-Trending-API
The official v3 API don't consist of the 'trending' and 'explore', here is an patch API for that :lollipop:

**the data will update every one hour**

I will place it on the server that anybody can access tomorrow

build will `express` + `cheerio` + `mongodb`

here is the preview format of repo:
```json
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
```