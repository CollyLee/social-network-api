const { ObjectId } = require('mongoose').Types;
const { Thought, User, Reaction } = require('../models');

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
        Thought.findOne({ _id: req.params.thoughtID })
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

    // UPDATE A THOUGHT BY ITS ID TAG
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

    // DELETE A THOUGHT BY ITS ID TAG
    deleteThoughtByID(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtID })
            // .then((thought) =>
            //     !thought
            //         ? res.status(404).json({ message: 'No thought with that ID' })
            //         : Reaction.deleteMany({ _id: { $in: Thought.reaction } })
            // )
            .then(() => res.json({ message: 'Thought and reactions deleted' }))
            .catch((err) => res.status(500).json(err));
    },

    // CREATE A REACTION
    createNewReaction(req, res) {
        Reaction.create(req.body)
            .then((reaction) => {
                return Thought.findOneAndUpdate(
                    { _id: req.body.thoughtId },
                    { $push: { reaction: reaction._id } },
                    { new: true }
                );
            })
            .then((post) =>
                !post
                    ? res
                        .status(404)
                        .json({ message: 'comment created, but no posts with this ID' })
                    : res.json({ message: 'comment created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    // DELETE A REACTION BY ITS ID TAG
    deleteReactionByID(req, res) {
        Reaction.findOneAndDelete({ _id: req.params.reactionId })
            .then(() => res.json({ message: 'Reaction deleted' }))
            .catch((err) => res.status(500).json(err));
    }

};
