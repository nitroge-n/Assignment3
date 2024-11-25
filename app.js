const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const assignmentController = require('./controllers/assignmentController');

const assignmentRoutes = require('./routes/assignmentRoutes');
const app = express();

// Connecting to MongoDB
const mongoURI = 'mongodb+srv://hamzachoudhry:EjigfDUK5F68Btb@cluster0.rudal.mongodb.net/'
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 
app.use(express.static('public'));

app.use(assignmentRoutes); 


app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
