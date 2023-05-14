const { Thought, User } = require('../models');

module.exports = {

    getAllThoughts(req, res) {
        Thought.find()
        .then ((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    createNewThought(req, res) {
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
    },

    getThoughtByID(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err)});
    },

    updateThoughtByID(req, res) {
    
    },

    deleteThoughtByID(req, res) {
    
    },

};
