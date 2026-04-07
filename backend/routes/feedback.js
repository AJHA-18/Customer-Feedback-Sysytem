const express = require('express');
const router = express.Router();
const db = require('../database');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Unauthorized' });
    req.user = decoded;
    next();
  });
};

// Get feedback for logged-in user
router.get('/my', verifyToken, (req, res) => {
  db.query(`SELECT * FROM feedback WHERE user_id = ?`, [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add feedback
router.post('/', verifyToken, (req, res) => {
  const { feedback } = req.body;
  db.query(
    `INSERT INTO feedback (user_id, feedback) VALUES (?, ?)`,
    [req.user.id, feedback],
    function (err, result) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Feedback submitted', id: result.insertId });
    }
  );
});

// Edit feedback (user)
router.put('/:id', verifyToken, (req, res) => {
  const { feedback } = req.body;
  db.query(
    `UPDATE feedback SET feedback = ? WHERE id = ? AND user_id = ?`,
    [feedback, req.params.id, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Feedback updated' });
    }
  );
});

// Admin - Get all feedback
router.get('/all', verifyToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  db.query(
    `SELECT feedback.*, users.username FROM feedback 
     JOIN users ON feedback.user_id = users.id 
     ORDER BY feedback.date DESC`,
    [],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    }
  );
});

// Admin - Delete feedback
router.delete('/:id', verifyToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  db.query(`DELETE FROM feedback WHERE id = ?`, [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Feedback deleted' });
  });
});

// Admin - Edit any feedback
router.put('/admin/:id', verifyToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  const { feedback } = req.body;
  db.query(
    `UPDATE feedback SET feedback = ? WHERE id = ?`,
    [feedback, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Feedback updated by admin' });
    }
  );
});

module.exports = router;