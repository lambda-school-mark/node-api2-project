const router = require("express").Router();
const Posts = require("../../data/db");

router.post("/", (req, res) => {
  try {
    if (req.body.title && req.body.contents) {
      Posts.insert(req.body)
        .then((post) => res.status(201).json({ post }))
        .catch((error) => console.log(error));
    } else {
      res.then();
    }
  } catch (error) {
    res.status(500).json({
      error: "There was an error while saving the post to the database",
    });
  }
});

module.exports = router;
