const { User, Thought } = require('../models');

const thoughtController = {
  // GET to get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .sort({ createdAt: -1 })
      .then(dbThoughtData => {
        res.json(dbThoughtData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  // GET to get a single thought by its _id
  getSingleThought(res, req) {},
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(res, req) {},
  // PUT to update a thought by its _id
  updateThought(res, req) {},
  // DELETE to remove a thought by its _id
  deleteThought(res, req) {},

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction(res, req) {},

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction(res, req) {},
};

module.exports = thoughtController;
