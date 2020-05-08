var express = require('express');
var router = express.Router();
var chuyenid = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'project1';

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

router.get('/find', function(req, res, next) {
  
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('prj1');
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

router.post('/add', function(req, res, next) {
 
  var add = req.body.add;

  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('prj1');
    // Insert some documents
    collection.insert(add, function(err, result) {
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
});

router.post('/del', function(req, res, next) {
  
  var del = req.body.del;
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('prj1');
    // Delete document where a is 3
    collection.deleteOne({ _id : chuyenid(del) }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });
  }

  // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
      removeDocument(db, function() {
        client.close();
      });
});
});

router.post('/up', function(req, res, next) {
  var up = req.body.up;
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('prj1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : chuyenid(up._id) }
      , { $set: {title:up.title,author:up.author,img:up.img,short_text:up.short_text,text:up.text,theme:up.theme,time:up.time} }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
  }

 // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
    updateDocument(db, function() {
      client.close();
    });
});
});

module.exports = router;
