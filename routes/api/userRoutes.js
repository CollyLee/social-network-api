const router = require('express').Router();
const {
    getAllUsers,
    createNewUser,
    getUserByID,
    updateUserByID,
    deleteUserByID,
    addAFriend,
} = require('../../controllers/userController');

router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser);

router
    .route('/:userID')
    .get(getUserByID)
    .put(updateUserByID)
    .delete(deleteUserByID);

router
    .route('/:userID/friend/:friendID')
    .post(addAFriend);
    
module.exports = router;