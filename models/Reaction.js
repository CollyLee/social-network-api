const { Schema, Types } = require('mongoose');

// REACTION SCHEMA
const reactionSchema = new Schema(
  {
    reactionId:
    {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody:
    {
      type: String,
      required: true,
      maxLength: 280
    },
    username:
    {
      type: String,
      required: true
    },
    createdAt:
    {
      type: Date,
      default: Date.now /* NEED TO ADD GETTER TO FORMAT DATE */
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);



module.exports = reactionSchema;
