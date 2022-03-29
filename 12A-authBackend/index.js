require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
// Create server
const app = express();
// ---- Data base ---
dbConnection();

// -------- Middlewares ------------
// Cors
app.use(cors());

// Read and parse body
app.use(express.json());

// Static files
app.use(express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));

// PORT const
const PORT = process.env.PORT || 9000;
// Turn on server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
