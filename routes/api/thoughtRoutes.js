const router = require('express').Router();
const {
    getAllThoughts,
    createNewThought,
    getThoughtByID,
    updateThoughtByID,
    deleteThoughtByID,
    createNewReaction,
    deleteReactionByID,
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts)
    .post(createNewThought);

router
    .route('/:thoughtID')
    .get(getThoughtByID)
    .put(updateThoughtByID)
    .delete(deleteThoughtByID);

router
    .route('/:thoughtID/reaction')
    .post(createNewReaction)
    .delete(deleteReactionByID);

module.exports = router;