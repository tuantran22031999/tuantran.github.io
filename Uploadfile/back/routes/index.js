var express = require('express');
var router = express.Router();
var multer  = require('multer');
var cors = require('cors');
var app = express();
app.use(cors());
var download = require('download-file');
var url = "https://ejoy-english.com/blog/wp-content/uploads/2018/05/tie%CC%82%CC%81ng-anh-u%CC%81c-.jpg"

var options = {
  directory: "./public/download",
  filename: "img.jpg"
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage }).single('file');


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'uploadfile';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index',{title:'express'})
});

router.post('/upload', function(req, res, next) {
  var id = req.body.val;
  console.log(id);
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)
}) 
});

router.get('/download', function(req, res, next) {
  res.render('download',{title:'express'})
 });

 router.post('/download', function(req, res, next) {
  download(url, options, function(err){
    if (err) throw err
    console.log("meow")
}) 
});



module.exports = router;
