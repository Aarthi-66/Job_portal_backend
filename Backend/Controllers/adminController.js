const Job = require('../models/jobModel');

// GET /employees
exports.getAllApplications = async (req, res) => {
  try {
    const jobs = await Job.find().populate('applicant', 'fullName email');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job applications', error: err.message });
  }
};

// PATCH /employees/:id/approve
exports.approveApplication = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Error approving application', error: err.message });
  }
};

// PATCH /employees/:id/rejected
exports.rejectApplication = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting application', error: err.message });
  }
};
