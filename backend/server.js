const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blockroutes = require('./routes/blockroutes');

const app = express();
const port = 3006;



// MongoDB Connection URL
const URL = 'mongodb+srv://23je0138:CansBKOMGRA3NX7B@cluster0.awfqtwu.mongodb.net/blocks?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));



// Middleware
app.use(cors()); 
app.use(express.json()); // Parse incoming JSON requests

// app.use(express.urlencoded({ extended: true })); 
// app.use(morgan('dev')); // Log requests



// app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs'); 


// app.use(blockroutes);





app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
