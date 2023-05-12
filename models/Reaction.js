const { Schema } = require('mongoose');

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: { type: Schema.Types.ObjectId, default: new ObjectId(), auto: true },
    reactionBody: { type: String, required: true, minLength: 1, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, /* NEED TO ADD GETTER TO FORMAT DATE */
  }
);

module.exports = Post;
