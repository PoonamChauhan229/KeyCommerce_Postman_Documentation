const mongoose = require('mongoose');

const ApiKeySchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const ApiKey = mongoose.model('ApiKey', ApiKeySchema);

module.exports = ApiKey;
