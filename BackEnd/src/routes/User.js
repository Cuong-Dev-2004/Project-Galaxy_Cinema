const router = require("express").Router();
const UserControllers = require("../controllers/UserControllers");





// RegisterUser 
router.post("/RegisterUser", UserControllers.RegisterUser);
// SignIn
router.post("/SignIn", UserControllers.SignIn);
// SignOut
router.post("/SignOut", UserControllers.LogOut);
// Refresh Token 
router.post("/RefreshToken", UserControllers.RefreshToken);


module.exports = router
