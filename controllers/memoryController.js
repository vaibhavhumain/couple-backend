const Memory = require('../models/Memory');

exports.saveMemory = async (req, res) => {
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const memory = new Memory({
      user: req.user?._id, 
      imageUrl: req.file.path
    });

    await memory.save();

    res.json({ imageUrl: req.file.path, memory });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

exports.getAllMemories = async (req, res) => {
  try {
    const memories = await Memory.find({ user: req.user?._id }).sort({ uploadedAt: -1 });
    res.json(memories);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
