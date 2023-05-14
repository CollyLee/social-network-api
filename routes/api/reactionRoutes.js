const router = require('express').Router();
const {
    createNewReaction,
    deleteReactionByID
} = require('../../controllers/reactionController');

router
    .route('/')
    .post(createNewReaction);

router
    .route('/:reactionID')
    .delete(deleteReactionByID);

module.exports = router;