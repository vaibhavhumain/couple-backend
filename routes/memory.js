const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const { saveMemory, getAllMemories } = require('../controllers/memoryController');
const authenticate = require('../middleware/authenticate'); 

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'memories',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 1200, height: 1200, crop: 'limit' }],
  },
});
const upload = multer({ storage });

router.post('/upload', authenticate, upload.single('photo'), saveMemory);

router.get('/all', authenticate, getAllMemories);

module.exports = router;
