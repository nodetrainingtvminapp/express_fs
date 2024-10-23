// app.js

import express from 'express';
import fileRoutes from './routes/fileRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Mount the file routes
app.use('/files', fileRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
