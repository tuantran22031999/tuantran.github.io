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

router.get('/story', function(req, res, next) {

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('story');
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

router.post('/upStory', function(req, res, next) {
  var story = req.body.story;
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('story');
    // Insert some documents
    collection.insert(story, function(err, result) {
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
    sex:req.body.sex,
    birthday:req.body.birthday,
    age:req.body.age,
    hometown:req.body.hometown,
    favorite:req.body.favorite,
    maxim:req.body.maxim,
    picture:req.body.picture,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    twitter:req.body.twitter,
    key:req.body.key
  }

  if(user.sex === "0"){
    user.sex = "male";
  }
  else if(user.sex === "1"){
    user.sex = "female";
  }
  else if(user.sex === "2"){
    user.sex = "other";
  }

  if(user.facebook === ""){
    user.facebook = "#";
  }
  else if(user.instagram === ""){
    user.instagram = "#";
  }
  else if(user.twitter === ""){
    user.twitter = "#";
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

router.post('/set_male', function(req, res, next) {

  var id = change(req.body.id);  
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('profile1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : id }
      , { $set: { picture : "https://banner2.cleanpng.com/20180725/ks/kisspng-logistics-indonesia-dhl-express-courier-guava-juic-5b58961790b4c5.5526889315325322475927.jpg" } }, function(err, result) {
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

router.post('/reset', function(req, res, next) {

  var reset = req.body.reset; 
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : change(reset.maid) }
      , { $set: { password:reset.new} }, function(err, result) {
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

router.post('/update_story', function(req, res, next) {

  var data = req.body.fix; 
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('story');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : change(data.id) }
      , { $set: { title:data.title,img:data.img,text:data.text} }, function(err, result) {
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


router.post('/up', function(req, res, next) {

  var profile = {
    maid:req.body.maid,
    name:req.body.name,
    sex:req.body.sex,
    birthday:req.body.birthday,
    age:req.body.age,
    hometown:req.body.hometown,
    favorite:req.body.favorite,
    maxim:req.body.maxim,
    picture:req.body.picture,
    facebook:req.body.facebook,
    instagram:req.body.instagram,
    twitter:req.body.twitter,
    key:req.body.key
  }

  if(profile.sex === "0"){
    profile.sex = "male";
  }
  else if(profile.sex === "1"){
    profile.sex = "female";
  }
  else if(profile.sex === "2"){
    profile.sex = "other";
  }

  if(profile.facebook === ""){
    profile.facebook = "#";
  }
  else if(profile.instagram === ""){
    profile.instagram = "#";
  }
  else if(profile.twitter === ""){
    profile.twitter = "#";
  }

  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('profile1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ maid : profile.maid }
      , { $set: {name:profile.name,sex:profile.sex,birthday:profile.birthday,age:profile.age,hometown:profile.hometown,favorite:profile.favorite,maxim:profile.maxim,picture:profile.picture,facebook:profile.facebook,instagram:profile.instagram,twitter:profile.twitter,key:profile.key} }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
  }

  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
      updateDocument(db, function() {
        client.close();
      });
  });
});

router.post('/delStory', function(req, res, next) {

  var ids = change(req.body.id);

  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('story');
    // Delete document where a is 3
    collection.deleteOne({ _id : ids }, function(err, result) {
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

module.exports = router;
