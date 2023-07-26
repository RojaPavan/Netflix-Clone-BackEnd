const {
  addToLikedMovie,
  getLikedMovie,
  removeFromLikedMovie,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovie);
router.post("/add", addToLikedMovie);
router.put("/delete", removeFromLikedMovie);

module.exports = router;
