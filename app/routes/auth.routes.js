const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit to 5 requests per 15 minutes
  message: "Too many login attempts, please try again later",
});


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", loginLimiter,controller.signin);

  app.post("/api/auth/signout", controller.signout);
};
