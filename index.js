var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://aaweeza123:aaweeza@cluster0.m9emvoz.mongodb.net/";

// var myobj = [
//     { "name": "Alice", "address": "321 Maple Ave" },
//     { "name": "Robert", "address": "654 Cedar St" },
//     { "name": "Emma", "address": "987 Birch Ln" },
//     { "name": "William", "address": "246 Pine St" },
//     { "name": "Olivia", "address": "135 Oak St" },
//     { "name": "James", "address": "579 Elm St" },
//     { "name": "Isabella", "address": "864 Maple Rd" },
//     { "name": "Alexander", "address": "273 Cedar Rd" },
//     { "name": "Sophie", "address": "680 Birch Ave" },
//     { "name": "Daniel", "address": "901 Elm Ave" }
// ];

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;

//     var database = db.db("MAJU");
//     database.collection("Students").insertMany(myobj, function(error, result) {
//         if (error) throw error;
//         console.log("Data inserted");
//         db.close();

//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;

//     var database = db.db("MAJU");
//     database.collection("Students").findOne({}, function(error, result) {
//         if (error) throw error;
//         console.log(result);
//         db.close();      

//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;

//     var database = db.db("MAJU");
//     database.collection("Students").findOne({}, function(error, result) {
//         if (error) throw error;
//         console.log(result);
//         db.close();      

//     });
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;

//   var database = db.db("MAJU");
//   database.collection("Students").updateOne({ name: "Amrahno" }, { $set: { name: "Amrah Imtiaz" } }, function(err, res) {
//     if (err) throw err;
//     console.log("Data Updated");
//   });
// });

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  
    var database = db.db("MAJU");
    database.collection("Students").deleteMany({ name: "John 123" }, function(err, res) {
      if (err) throw err;
      console.log("Data Deleted");
    });
  });
  