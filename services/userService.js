const User = require('../models/user');
const Post = require('../models/post');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = password === user.password;
  if (!isMatch) throw new Error('Invalid credentials');

  // Generate a JWT token (you can customize this as needed)
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  return { user, token };
};

const sendFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  user.friendRequests.push(friendId);
  return await user.save();
};

const acceptFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);
  
  // Add friend to both users' friends lists
  user.friends.push(friendId);
  friend.friends.push(userId);

  // Remove request
  user.friendRequests = user.friendRequests.filter(id => !id.equals(friendId));
  
  await user.save();
  await friend.save();
};

const rejectFriendRequest = async (userId, friendId) => {
  const user = await User.findById(userId);
  user.friendRequests = user.friendRequests.filter(id => !id.equals(friendId));
  return await user.save();
};

const createPost = async (postData) => {
  const post = new Post(postData);
  await post.save();

  // Add post to the author's profile
  const user = await User.findById(postData.author);
  user.posts.push(post._id);
  await user.save();

  return post;
};

const addComment = async (postId, commentData) => {
  const post = await Post.findById(postId);
  post.comments.push(commentData);
  return await post.save();
};

const getFeed = async (userId) => {
  const user = await User.findById(userId).populate('friends').populate('posts');
  let posts = [];

  // Get posts from friends
  for (let friend of user.friends) {
    const friendPosts = await Post.find({ author: friend._id });
    posts = posts.concat(friendPosts);
  }

  // Get posts where friends have commented
  const commentedPosts = [];
  for (let friend of user.friends) {
    const postsWithComments = await Post.find({ 'comments.author': friend._id });
    postsWithComments.forEach(post => {
      if (!posts.some(p => p._id.equals(post._id))) {
        commentedPosts.push(post);
      }
    });
  }

  posts = posts.concat(commentedPosts);
  return posts;
};

module.exports = {
  registerUser,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  createPost,
  addComment,
  getFeed,
  loginUser
};
