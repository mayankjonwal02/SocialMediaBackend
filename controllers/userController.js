const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const sendFriendRequest = async (req, res) => {
  try {
    const user = await userService.sendFriendRequest(req.params.userId, req.params.friendId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const acceptFriendRequest = async (req, res) => {
  try {
    const user = await userService.acceptFriendRequest(req.params.userId, req.params.friendId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const rejectFriendRequest = async (req, res) => {
  try {
    const user = await userService.rejectFriendRequest(req.params.userId, req.params.friendId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await userService.createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const addComment = async (req, res) => {
  try {
    const post = await userService.addComment(req.params.postId, req.body);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getFeed = async (req, res) => {
  try {
    const feed = await userService.getFeed(req.params.userId);
    res.status(200).json(feed);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  registerUser,
  createPost,
  addComment,
  getFeed,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  loginUser
};
