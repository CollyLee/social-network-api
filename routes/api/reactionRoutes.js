const router = require('express').Router();
const {  } = require('../../controllers/reactionController');

router.route('/').post(createNewReaction);
router.route('/:_id').delete(deleteReactionByID);

module.exports = router;