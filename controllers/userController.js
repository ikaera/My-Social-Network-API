const { User, Thought } = require('../models');

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },

  // GET a single user by its _id and populated thought and friend data

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(user =>
        !user
          ? res.status(404).json({ message: 'No usere with that ID' })
          : res.json(user),
      )
      .catch(err => res.status(500).json(err));
  },

  // POST a new user:
  createUser(req, res) {
    User.create(req.body)
      .then(dbUserData => {
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // DELETE to remove user by its _id
  // deleteUser

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(dbUserData =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: dbUserData.thoughts } }),
      )
      .then(() => res.json({ message: 'User and thought deleted!' }))
      .catch(err => res.status(500).json(err));
  },

  // PUT to update a user by its _id
  // updateUser,
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },

  // POST to add a new friend to a user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true },
    ).then(dbUserData => {
      if (!dbUserData) {
        return res.status(404).json({ message: 'No friend with this ID' });
      }
      res.json(dbUserData).catch(err => res.status(500).json(err));
    });
  },

  // DELETE to remove a friend from a user's friend list

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { new: true },
    )
      .then(dbUserData =>
        !dbUserData
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(dbUserData),
      )
      .catch(err => res.status(500).json(err));
  },
};
