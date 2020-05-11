var express = require('express');
var router = express.Router();
var model = require('../model/contact')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/seen', function(req, res, next) {
  model.find({} , function(err, data){
    res.render('seen', { title: 'seen' , data: data});
  });
});

router.get('/delete.:id', function(req, res, next) {
  model.remove({_id:req.params.id} , function(err, data){
    res.redirect('seen');
  });
});

module.exports = router;
