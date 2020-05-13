var express = require('express');
var router = express.Router();
var change  = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'project2';

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

router.get('/user', function(req, res, next) {

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user1');
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

router.get('/profile', function(req, res, next) {

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('profile1');
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

router.post('/insert', function(req, res, next) {

  var user = {
    user:req.body.user,
    password:req.body.password,
    on:req.body.on
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user1');
    // Insert some documents
    collection.insert(user, function(err, result) {
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

router.post('/add', function(req, res, next) {
  var user = {
    maid:req.body.maid,
    name:req.body.name,
    birthday:req.body.birthday,
    age:req.body.age,
    hometown:req.body.hometown,
    favorite:req.body.favorite,
    maxim:req.body.maxim,
    picture:req.body.picture
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('profile1');
    // Insert some documents
    collection.insert(user, function(err, result) {
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

router.post('/fix', function(req, res, next) {

  var id = change(req.body.id);  
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : id }
      , { $set: { on : true } }, function(err, result) {
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
