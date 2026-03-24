const express = require('express');
const router = express.Router();
const { createDiscussion } = require('../controllers/discussion.controller');

router.post('/new', createDiscussion);

module.exports = router;
