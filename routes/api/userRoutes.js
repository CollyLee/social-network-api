const router = require('express').Router();
const {
    getAllUsers,
    createNewUser,
    getUserByID,
    updateUserByID,
    deleteUserByID,
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

// router
//     .route('/:userID/friends/:friendID')
    
module.exports = router;