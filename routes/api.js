const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

let URL = 'https://www.googleapis.com/customsearch/v1?searchType=image&key='+ process.env.GOOGLE_API +'&cx=' + process.env.GOOGLE_CX + '&q=';

let Search = require('../models/search');

router.get('/:query', function(req, res){
  var query = req.params.query;
  var offset;
  // console.log(req.query);
  if(req.query.hasOwnProperty('offset')) {
      // console.log('Has offset property');
      offset = parseInt(req.query.offset) > 0 ? parseInt(req.query.offset) : 1;
  } else {
    offset = 1;
  }
  var startIndex = '&start=' + ((offset-1) * 10 + 1).toString();
  var reqURL = URL + query + startIndex;
  fetch(reqURL)
    .then(function(response){
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      var resultData = [];
      response.json().then(function(data) {
        data.items.forEach(function(img){
          resultData.push({
            "title":img.title,
            "imgLink":img.link,
            "contextLink":img.image.contextLink,
            "thumbnailLink":img.image.thumbnailLink
          });
        });
        let newSearch = new Search({
          term:query,
          when:Date.now()
        });
        newSearch.save(function(err){
          if (err) {
            console.log(err);
            return;
          } else {
            res.json(resultData);
          }
        });
      });
    })
    .catch(function(error){
      console.log("Some Error Occurred" + error);
    })

});

router.get('/searches/latest', function(req, res){
  Search.find({}).sort({when: -1}).limit(10).exec(function(err, posts){
    if (err) throw err;
    else {
      var searches = [];
      posts.forEach(function(search){
        searches.push({
          "term":search.term,
          "when":search.when
        });
      });

      res.json(searches);
    }
  });
});

module.exports = router;
