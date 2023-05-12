const { Schema, model } = require('mongoose');

// USER SCHEMA
const userSchema = new Schema({
    username: { type: String, required: true, trim: true, index: { unique: true }},
    email: { type: String, required: true, index: { unique: true }}, /* NEED TO ADD EMAIL VALIDATION */
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
} , {
    toJSON: {
        virtuals: true,
    },
});

// FRIEND COUNT VIRTUAL
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// CREATING USER MODEL
const User = model('user', userSchema);

module.exports = User;