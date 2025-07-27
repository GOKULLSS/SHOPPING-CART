// config/connection.js
const { MongoClient } = require('mongodb');

const state = {
  db: null
};

const url = 'mongodb://localhost:27017';
const dbName = 'shopping';

module.exports.connect = async function () {
  if (state.db) return;  // Already connected
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Attempting MongoDB connection...");
  await client.connect();
  console.log("✅ MongoDB connected!");
  state.db = client.db(dbName);
};

module.exports.get = function () {
  if (!state.db) {
    throw new Error('Call connect() first!');
  }
  return state.db;
};
