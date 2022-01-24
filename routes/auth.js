const express = require("express");
const router = express.Router();
const passport = require("passport");

//Login google auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//Auth google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/dashboard");
  }
);

//Logout
// path: /auth/logout
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
