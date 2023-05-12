const { Schema, model } = require('mongoose');
const { Reaction } = require('./Reaction') /* IS THIS NEEDED? */


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

// SEEDING THOUGHT DATA
Thought.create([
  { thoughtText: "She said I wasn't sponge-worthy. Wouldn't waste a sponge on me.", createdAt: Date.now, username: 'Cristobal Malsam' },
  { thoughtText: "I can't be with someone like me. I hate myself!", createdAt: Date.now, username: 'Bella Goth' },
  { thoughtText: "People on dates shouldn't even be allowed out in public.", createdAt: Date.now, username: 'Bob Pancakes' },
  { thoughtText: "What could possess anyone to throw a party? I mean, to have a bunch of strangers treat your house like a hotel room.", createdAt: Date.now, username: 'Nina Caliente' },
  { thoughtText: "Hunger will make people do amazing things. I mean, the proof of that is cannibalism.", createdAt: Date.now, username: 'Nina Caliente' },
  { thoughtText: "If you want to make a person feel better after they sneeze, you shouldn't say 'God bless you.' You should say, 'You're so good looking!", createdAt: Date.now, username: 'Mimi Landgraab' },
  { thoughtText: "Is it possible that I'm not as attractive as I think I am?", createdAt: Date.now, username: 'Betty Newbie' },
  { thoughtText: "It's not fair people are seated first come, first served. It should be based on who's hungriest.", createdAt: Date.now, username: 'Bob Newbie' },
  { thoughtText: "Tuesday has no feel! Monday has a feel. Friday has a feel. Sunday has a feel.", createdAt: Date.now, username: 'Bob Newbie' },
])

module.exports = Thought;
