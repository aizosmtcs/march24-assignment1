const express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nickname', { title: 'Name Window' });
});

router.post('/', function(req, res, next) {
    console.log(req.body.nickname);
    res.render('chat', {data: {nickname: req.body.nickname}})
});

module.exports = router;