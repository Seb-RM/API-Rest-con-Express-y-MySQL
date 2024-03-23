const router = require("express").Router();

const middlewares = require("./middlewares")

const apiFilmsRouter = require("./api/films");
const apiUserRouter = require("./api/users")

router.use("/films", middlewares.checkToken, apiFilmsRouter);
router.use("/users", apiUserRouter);

module.exports = router;
