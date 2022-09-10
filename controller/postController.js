const { Post } = require("../model/post");

const postController = {
  //get All posts
  getAllPost: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = postController;
