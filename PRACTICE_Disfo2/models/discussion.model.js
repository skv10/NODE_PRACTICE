const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 150,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      immutable: true,
      trim: true,
    },
    content: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const DiscussionModel = mongoose.model("Discussion", discussionSchema);

module.exports = DiscussionModel;