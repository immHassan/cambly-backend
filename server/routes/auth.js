const {
  login,
  register,
  getAllUsers,
  getTeachers,
  getTeacher,
  setAvatar,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);

router.get("/teachers/", getTeachers);
router.get("/teacher/:id", getTeacher);




router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
