const { Reaction, Thought } = require('../models');

module.exports = {

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
