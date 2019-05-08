var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var conceptSchema = new Schema({
  name: String,
  votes: [ObjectId]
});

module.exports = mongoose.model('Concept', conceptSchema);