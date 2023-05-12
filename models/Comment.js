const { Schema, model } = require('mongoose');

// THOUGHT SCHEMA
const thoughtSchema = new Schema({
  text: String,
  username: String,
});

// CREATING THOUGHT MODEL
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
