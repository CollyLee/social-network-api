const { Schema, model } = require('mongoose');

// USER SCHEMA
const userSchema = new Schema({
    username:
    {
        type: String,
        required: true,
        trim: true,
        index: { unique: true }
    },
    email:
    {
        type: String,
        required: true,
        index: { unique: true }
    }, /* NEED TO ADD EMAIL VALIDATION */
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
}, {
    toJSON: {
        virtuals: true,
    },
});

// FRIEND COUNT VIRTUAL
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// CREATING USER MODEL
const User = model('User', userSchema);

// SEEDING USER DATA

const seedUsers = async () => {
    await User.deleteMany({});
    await User.insertMany([
        { username: 'Cristobal Malsam', email: 'cmalsam@gmail.com' },
        { username: 'Chong Dahmer', email: 'cdahmer@gmail.com' },
        { username: 'Bella Goth', email: 'babybellaGoth@gmail.com' },
        { username: 'Bob Pancakes', email: 'bobbycakes@gmail.com' },
        { username: 'Nina Caliente', email: 'mizzCaliente@gmail.com' },
        { username: 'Mimi Landgraab', email: 'mimilandgraab@gmail.com' },
        { username: 'Betty Newbie', email: 'bettyBnewbie@gmail.com' },
        { username: 'Bob Newbie', email: 'MrBettyNewbie@gmail.com' },
    ])
};
module.exports = User;
seedUsers();

