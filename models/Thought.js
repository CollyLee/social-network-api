const { Schema, model } = require('mongoose');

// THOUGHT SCHEMA
const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now }, /* NEED TO ADD GETTER TO FORMAT DATE */
  username: { type: String, required: true },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
}, {
  toJSON: {
    virtuals: true,
  },
});

// REACTION COUNT VIRTUAL
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// CREATING THOUGHT MODEL
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
