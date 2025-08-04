const mongoose = require('mongoose');

const feelingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  feeling: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Feeling', feelingSchema);
