var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var voteSchema = new Schema({
  orientation: String,
  concept: ObjectId
});

module.exports = mongoose.model('Vote', voteSchema);
