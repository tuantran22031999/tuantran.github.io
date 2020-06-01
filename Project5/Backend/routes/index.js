var express = require('express');
var router = express.Router();
var multer  = require('multer');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs'); 
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix  + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'project5';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',upload.single('up'),function(req, res, next) {
  var x= 'upload/'+req.file.originalname;  
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('up');
  // Insert some documents
  collection.insertO(x, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  insertDocuments(db, function() {
    client.close();
  });
});
 res.send('upload success');
});

module.exports = router;
