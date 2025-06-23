const express = require("express");
const router = express.Router({ mergeParams: true });

const commentRouter = require("./comment.route");
const postRouter = require("./post.route");
const topicRouter = require("./topic.route");

router.use("/topics", topicRouter);

//Route cho posts và các thành phần con
router.use("/posts", postRouter);
router.use("/posts/:slug/comments", commentRouter);

module.exports = router;
