var express = require('express');
var router = express.Router();
var multer  = require('multer');
var cors = require('cors');
var app = express();
app.use(cors());
var download = require('download-file');
var url = "https://ejoy-english.com/blog/wp-content/uploads/2018/05/tie%CC%82%CC%81ng-anh-u%CC%81c-.jpg";
var fs = require('fs');

var options = {
  directory: "./public/download",
  filename: "img.jpg"
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './up')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,file.originalname)
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
  // function base64_encode(file) {
  //   // read binary data
  //   var bitmap = fs.readFileSync(file);
  //   // convert binary data to base64 encoded string
  //   var str = new Buffer(bitmap).toString('base64');
  //   res.send(str);
  // }
  // base64_encode('./up/1590726217211-639107599-2020-05-25_110202.png');
});

router.get('/find', function(req, res, next) {
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('test');
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


router.post('/', function(req, res, next) {
  var str = null;
  function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    str = new Buffer(bitmap).toString('base64');
  }
  // base64_encode('./up/1590726217211-639107599-2020-05-25_110202.png');
  var file = req.body.file.toString();
  var check = true;
  var check1  = false;
  setTimeout(function(){
    if(check = true){
    base64_encode(`./up/${file}`);
    check = false;
  }
  },1000);

  setTimeout(function(){
    var data = {
      img:str
    }
    const insertDocuments = function(db, callback) {
      // Get the documents collection
      const collection = db.collection('test');
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
  },5000);
});

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
