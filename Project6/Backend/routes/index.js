var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const change_id = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'project6';

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

router.post('/add', function(req, res, next) {
  var add = req.body.add;
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('data');
    // Insert some documents
    collection.insertOne(add, function(err, result) {
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

router.post('/comment', function(req, res, next) {
  var comment = {
    name:req.body.comment.name,
    comment:req.body.comment.comment,
    id_theme:req.body.comment.id_theme,
    num:req.body.comment.num,
    date:req.body.comment.date,
    month:req.body.comment.month,
    year:req.body.comment.year
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('comment');
    // Insert some documents
    collection.insertOne(comment, function(err, result) {
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

router.post('/reply', function(req, res, next) {
  var reply = {
    name:req.body.reply.name1,
    reply:req.body.reply.rep,
    id_in:req.body.reply.id_in,
    num:req.body.reply.num1,
    date:req.body.reply.date,
    month:req.body.reply.month,
    year:req.body.reply.year
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('reply');
    // Insert some documents
    collection.insertOne(reply, function(err, result) {
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

router.get('/find', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('data');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
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

router.get('/find_comment', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('comment');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
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

router.get('/find_reply', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('reply');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
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

router.post('/up_seen', function(req, res, next) {
  var up = req.body.up;
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('data');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({_id:change_id(up._id)}
      , { $set: { seen : (up.seen + 1) } }, function(err, result) {
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

router.post('/up_like', function(req, res, next) {
  var up = req.body.like;
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('data');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({_id:change_id(up._id)}
      , { $set: { like : (up.like + 1) } }, function(err, result) {
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

router.post('/up_dislike', function(req, res, next) {
  var up = req.body.dislike;
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('data');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({_id:change_id(up._id)}
      , { $set: { dislike : (up.dislike + 1) } }, function(err, result) {
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
