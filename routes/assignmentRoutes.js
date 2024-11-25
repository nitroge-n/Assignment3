// routes/assignmentRoutes.js
const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Home Route
router.get('/', assignmentController.homePage);

// Show all assignments
router.get('/assignments', assignmentController.getAllAssignments);

// Form to create a new assignment
router.get('/assignments/new', assignmentController.addAssignmentForm);

// Create new assignment (POST request)
router.post('/assignments', assignmentController.createAssignment);

// Form to edit an assignment
router.get('/assignments/:id/edit', assignmentController.editAssignmentForm);

// Update an assignment (PUT request)
router.put('/assignments/:id', assignmentController.updateAssignment);

// Delete an assignment (DELETE request)
router.delete('/assignments/:id', assignmentController.deleteAssignment);

module.exports = router;
