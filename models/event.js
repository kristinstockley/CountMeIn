const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: false},
  details: {type: String, required: false},
  location: {type: String, required: false},
  tag: {type: String, required: true,
  enum: ['travel', 'birthday', 'family', 'business', 'concert', 'wedding', 'sports', 'social', 'other']},
  uploaded_by: {type: Schema.Types.ObjectId, ref: 'User'}

}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);
