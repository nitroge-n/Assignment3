const Assignment = require('../models/assignment');

// Render home page (splash page)
exports.homePage = (req, res) => {
    res.render('index');
};

// Display all assignments
exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.render('assignmentList', { assignments });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

// Add new assignment
exports.addAssignmentForm = (req, res) => {
    res.render('editAssignment', { assignment: {} });
};

exports.createAssignment = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        const newAssignment = new Assignment({ title, description, dueDate });
        await newAssignment.save();
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

// Edit assignment
exports.editAssignmentForm = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        res.render('editAssignment', { assignment });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

exports.updateAssignment = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        await Assignment.findByIdAndUpdate(req.params.id, { title, description, dueDate });
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};

// Delete assignment
exports.deleteAssignment = async (req, res) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};
