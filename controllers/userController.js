const User = require('../models/User');

module.exports = {

    // GET ALL USERS
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // // GET ONE USER BY THEIR ID TAG
    // getUserByID(req, res) {
    //     User.findOne({ _id: req.params.userId })
    //         .select('-__v')
    //         .then((user) =>
    //             !user
    //                 ? res.status(404).json({ message: 'No user with that ID' })
    //                 : res.json(user)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },

    // // CREATE NEW USER
    // createNewUser(req, res) {
    //     User.create(req.body)
    //         .then((dbUserData) => res.json(dbUserData))
    //         .catch((err) => res.status(500).json(err));
    // },

    // // UPDATE USER BY THEIR ID TAG
    // updateUserByID(req, res) {

    // },

    // // DELETE USER BY THEIR ID TAG
    // deleteUserByID(req, res) {

    // },
};
