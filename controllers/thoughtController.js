const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {

    // GET ALL THOUGHTS
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    
    // CREATE A NEW THOUGHT
    createNewThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // GET A THOUGHT BY ID TAG
    getThoughtByID(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            });
    },

    // UPDATE A USER BY THEIR ID TAG
    updateThoughtByID(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID },
            { $set: req.body },
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // DELETE A THOUGHT BY THEIR ID TAG
    deleteThoughtByID(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtID })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : Reaction.deleteMany({ _id: { $in: thought.reaction } })
            )
            .then(() => res.json({ message: 'Thought and reactions deleted' }))
            .catch((err) => res.status(500).json(err));
    },

};
