var express = require('express');
var router = express.Router();
var multer  = require('multer');
var cors = require('cors');
var app = express();
app.use(cors());
var fs = require('fs');
var change_id = require('mongodb').ObjectId;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,file.originalname)
  }
})
var upload = multer({ storage: storage }).single('file');


// connect Mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'project7';
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


// data_user================================
router.get('/user', function(req, res, next) {
    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('user');
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


// data_upload================================
router.get('/data_upload', function(req, res, next) {
  const findDocuments = function(db, callback) {
      // Get the documents collection
      const collection = db.collection('upload');
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



// data_sub================================
router.get('/data_sub', function(req, res, next) {
  const findDocuments = function(db, callback) {
      // Get the documents collection
      const collection = db.collection('sub');
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


// set_user================================
router.post('/insert_user', function(req, res, next) {
  var user = {
    user:req.body.data.user,
    password:req.body.data.password,
    nickname:req.body.data.nickname
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Insert some documents
    collection.insert(user, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 document into the collection");
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



// set_sub================================
router.post('/insert_sub', function(req, res, next) {
  var sub = {
    sub_id:req.body.sub,
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('sub');
    // Insert some documents
    collection.insert(sub, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 document into the collection");
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



// upload===========================
router.post('/upload', function(req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)
}) 
});


// up================================
router.post('/up', function(req, res, next) {
  var str = null;
  var file = req.body.name.toString();
  var data = req.body.data;
  function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    str = new Buffer(bitmap).toString('base64');
  }
  setTimeout(function(){
    base64_encode(`./upload/${file}`);
  },1000);
  setTimeout(function(){
    var up = {
      img:str,
      id:data.id,
      content:data.content,
      date:data.date,
      month:data.month,
      year:data.year,
      hour:data.hour,
      name:data.name,
      theme:data.theme
    }
      const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('upload');
    // Insert some documents
    collection.insert(up, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 document into the collection");
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
  },5000);
});



// delete==============================
router.post('/delete', function(req, res, next) {
  var id = change_id(req.body._id);
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('upload');
    // Delete document where a is 3
    collection.deleteOne({ _id : id }, function(err, result) {
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



// delete==============================
router.post('/remove_sub', function(req, res, next) {
  var id_sub = req.body.id_sub;
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('sub');
    // Delete document where a is 3
    collection.deleteOne({ sub_id : id_sub }, function(err, result) {
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
