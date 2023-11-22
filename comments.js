// Create web server
// Access to database
// Access to the API

// Import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Import routes
const posts = require('./routes/posts');
const comments = require('./routes/comments');

// Use middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/posts', posts);
app.use('/comments', comments);

// Start server
app.listen(process.env.PORT || 8081);
