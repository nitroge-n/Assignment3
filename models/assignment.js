const mongoose = require('mongoose');

// Define the assignment schema
const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    }
});

// Create the model
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
