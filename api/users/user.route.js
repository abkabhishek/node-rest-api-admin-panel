const express = require("express")
const User = require("./user.models")
const router = express.Router()

// Get all posts
router.get("/", async (req, res) => {
  const users = await User.find()
  res.send(users)
})


module.exports = router