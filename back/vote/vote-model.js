var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var voteSchema = new Schema({
  orientation: String,
  concept: {
    type: ObjectId, 
    ref: 'Concept'
  }
});

module.exports = mongoose.model('Vote', voteSchema);
