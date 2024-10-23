// fileRoutes.js

import express from 'express';
import {
  handleCheckIfFileExists,
  handleWriteTextToFile,
  handleReadDirectory,
  handleDeleteFile,
  handleAppendTextToFile,
} from '../controllers/fileController.js';

const router = express.Router();

// Route to check if a file exists
router.get('/exists/:fileName', handleCheckIfFileExists);

// Route to write text to a file
router.post('/write', handleWriteTextToFile);

// Route to read directory contents
router.get('/list', handleReadDirectory);

// Route to delete a file
router.delete('/delete/:fileName', handleDeleteFile);

// Route to append text to a file
router.post('/append', handleAppendTextToFile);

export default router;
