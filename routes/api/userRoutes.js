const router = require('express').Router();
const { getAllUsers, createNewUser, getUserByID, updateUserByID, deleteUserByID } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:_id').get(getUserByID).put(updateUserByID).delete(deleteUserByID);

module.exports = router;