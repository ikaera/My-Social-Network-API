const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: function (timeStamp) {
        return dayjs(timeStamp).format('DD/MM/YYYY');
      },
    },
    username: {
      type: String,
      required: true,
      // max_length: 50,
    },
    // github: {
    //   type: String,
    //   required: true,
    //   max_length: 50,
    // },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  },
);

// Create a virtual property `reactionCount` that gets the amount of reactions per post
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
