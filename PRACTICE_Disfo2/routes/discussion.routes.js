const express = require('express');
const router = express.Router();
const { createDiscussion, getAllDiscussions, getDiscussionsByUsername } = require('../controllers/discussion.controller');
const { validateApiKey } = require('../middlewares/auth.middleware');

router.post('/new', createDiscussion);
router.get('/all1', validateApiKey, getAllDiscussions);
router.get('/user/:username', getDiscussionsByUsername);

module.exports = router;
