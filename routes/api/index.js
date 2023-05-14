const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);
router.use('/thought/:thoughtId/reaction', reactionRoutes);
// router.use('/user/:userId/friends/:friendId', /* friendRoutes */);

module.exports = router;
