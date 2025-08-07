const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  imageUrl: { type: String, required: true },
  caption: { type: String }, 
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Memory', MemorySchema);    