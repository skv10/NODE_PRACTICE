const DiscussionModel = require('../models/discussion.model');
const UserModel = require('../models/user.model');
const { discussionSchema } = require('../validations/discussion.validator');

const createDiscussion = async (req, res) => {
    try {
        const { error, value } = discussionSchema.validate(req.body);
        if (error) return res.status(422).json(error);
        const user = await UserModel.findOne({ username: value.author });
        if (!user) return res.status(404).json({ message: 'user not found', author: value.author });
        const discussion = await DiscussionModel.create(value);
        res.status(200).json(discussion);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllDiscussions = async (req, res) => {
    try {
        const discussions = await DiscussionModel.find();
        if (!discussions.length) return res.status(404).json({ message: 'No Discussions found' });
        res.status(200).json(discussions);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getDiscussionsByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const discussions = await DiscussionModel.find({ author: username });
        if (!discussions.length) return res.status(404).json({ message: 'No discussions found for this user', username });
        res.status(200).json(discussions);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { createDiscussion, getAllDiscussions, getDiscussionsByUsername };
