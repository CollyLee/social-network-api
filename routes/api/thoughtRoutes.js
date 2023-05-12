const router = require('express').Router();
const { getAllThoughts, createNewThought, getThoughtByID, updateThoughtByID, deleteThoughtByID } = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createNewThought);
router.route('/:_id').get(getThoughtByID).put(updateThoughtByID).delete(deleteThoughtByID);

module.exports = router;