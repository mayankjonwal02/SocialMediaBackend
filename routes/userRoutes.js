const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser); 
router.post('/posts', userController.createPost);
router.post('/posts/:postId/comments', userController.addComment);
router.get('/users/:userId/feed', userController.getFeed);
router.post('/friends/:userId/request/:friendId', userController.sendFriendRequest);
router.post('/friends/:userId/accept/:friendId', userController.acceptFriendRequest);
router.post('/friends/:userId/reject/:friendId', userController.rejectFriendRequest);

module.exports = router;
