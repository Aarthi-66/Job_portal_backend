const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.get('/employees', verifyToken, isAdmin, adminController.getAllApplications);
router.patch('/employees/:id/approve', verifyToken, isAdmin, adminController.approveApplication);
router.patch('/employees/:id/rejected', verifyToken, isAdmin, adminController.rejectApplication);

module.exports = router;
