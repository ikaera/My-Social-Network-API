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
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then(thought => {
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  // POST to create a new thought
  // (don't forget to push the created thought's _id to the associated user's thoughts array field)
  createThought(req, res) {
    Thought.create({
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    })
      .then(dbThoughtData => {
        // find user by userId
        User.findOne({ _id: req.body.userId }).then(user => {
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          } else {
            user.thoughts.push(dbThoughtData._id);
            res.json(dbThoughtData);
          }
        });
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // PUT to update a thought by its _id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  // DELETE to remove a thought by its _id
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID :(' });
        }

        return User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true },
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          return res.status(404).json({
            message: 'Thought was deleted but No user found with that ID :(',
          });
        }
        res.json({ message: 'Thought was succesfully deleted!' });
      })
      .catch(err => res.status(500).json(err));
  },

  // POST to create a reaction stored in a single thought's reactions array field
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true },
    ).then(dbThoughtData => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: 'No reaction with this ID' });
      }
      res.json(dbThoughtData).catch(err => res.status(500).json(err));
    });
  },

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true },
    )
      .then(dbThoughtData =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(dbThoughtData),
      )
      .catch(err => res.status(500).json(err));
  },
};

module.exports = thoughtController;
