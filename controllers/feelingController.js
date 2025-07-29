const jwt = require('jsonwebtoken');
const Feeling = require('../models/Feeling');

exports.saveFeeling = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { feeling } = req.body;

    const newFeeling = new Feeling({
      userId: decoded._id,
      feeling,
    });

    await newFeeling.save();
    res.status(201).json({ message: 'Feeling saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving feeling', error: err.message });
  }
};
