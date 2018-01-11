# FCC API Basejump: Image Search Abstraction Layer
### User Stories
> 1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
> 2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
> 3. I can get a list of the most recently submitted search strings.

### Example Query Usage
`https://isal-hemakshis.glitch.me/api/taj%20mahal`

### Example Query Output
An array of objects showing 10 search results (You can paginate through the results by passing an offset query). Format of one such object is:-
`{
  "title": "Taj Mahal - Wikipedia",
  "imgLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
  "contextLink": "https://en.wikipedia.org/wiki/Taj_Mahal",
  "thumbnailLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejEfwD-PXPIG4h-CyLeLzKAsB0ebGJeTSjy1ir9OXneIldX6KvHt8NgoE"
}`

### Example Latest Usage
`https://isal-hemakshis.glitch.me/api/searches/latest`

### Example Latest Output
An array of objects showing latest 10 searches done. Format of one such object is:-
`{"term": "taj mahal", "when": "2018-01-11T09:43:22.962Z"}`
