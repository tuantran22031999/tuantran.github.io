var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'project3';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
});

router.get('/get_abc', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('abc');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  const db = client.db(dbName);
    findDocuments(db, function(data) {
      res.send(data);
      client.close();
    });
});
});

router.get('/get_animal', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('animal');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
  // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  const db = client.db(dbName);
    findDocuments(db, function(data) {
      res.send(data);
      client.close();
    });
});
});

router.post('/add.22031999', function(req, res, next) {

  var data = req.body.add;
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection(data.theme);
    // Insert some documents
    collection.insert(data, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 documents into the collection");
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
});


module.exports = router;
