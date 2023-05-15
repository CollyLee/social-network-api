const User = require('../models/User');

module.exports = {

    // GET ALL USERS
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // GET ONE USER BY THEIR ID TAG
    getUserByID(req, res) {
        User.findOne({ _id: req.params.userID })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // CREATE NEW USER
    createNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // UPDATE USER BY THEIR ID TAG
    updateUserByID(req, res) {
        User.findByIdAndUpdate(
            { _id: req.params.userID },
            { $set: req.body },
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // DELETE USER BY THEIR ID TAG
    deleteUserByID(req, res) {
        User.findOneAndDelete({ _id: req.params.userID })
            // .then((user) =>
            //     !user
            //         ? res.status(404).json({ message: 'No user with that ID' })
            //         : Reaction.deleteMany({ _id: { $in: user.thought } })
            // )
            .then(() => res.json({ message: 'User and thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },


    // ADD A FRIEND
    addAFriend(req, res) {
        User.findByIdAndUpdate(
            { _id: req.params.thoughtID },
            { $push: { friend: friend._id } },
            { new: true }
        )
            .then(() => res.json({ message: 'Friend added!' }))
            .catch((err) => res.status(500).json(err));
    }
}