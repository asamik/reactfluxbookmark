var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
   res.json({ links: links });
});

router.post('/api/links/delete', function(req, res, next) {
   var linkidToBeDeleted = req.body.id;
   var newlinks = links.filter((link) => Number(linkidToBeDeleted) !== Number(link.id))
   links = newlinks;
   console.log("newlinks2", newlinks)
   res.json({ linkidToBeDeleted: linkidToBeDeleted });
});


router.post('/api/links', function(req, res, next) {
   var newLink = req.body;
   newLink.id = Date.now();
   links.push(newLink);
   res.json(newLink);
});

module.exports = router;
