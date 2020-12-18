var mongoose = require('mongoose');
const { Schema } = mongoose;

let resourceSchema = new Schema({
    name:  { type: String, required: true },
    description:  { type: String, required: true },
    description1:  { type: String, required: true },
    link:  { type: String, required: true },
    link1:  { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  var Resource = mongoose.model('Resource', resourceSchema);
  
  module.exports = Resource;