const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
// Create a new MongoClient
const client = new MongoClient(uri);

module.exports = client ;