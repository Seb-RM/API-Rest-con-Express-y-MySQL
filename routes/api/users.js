const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

const { User} = require("../../db");

router.get("/", async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
});

router.post("/register", [
    check( "username", "El nombre de usuario es obligatorio.").not().isEmpty(),
    check("password", "El password es obligatorio.").not().isEmpty(),
    check("email","El email debe ser correcto.").isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array()});
    };
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.put("/:filmId", async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId },
    });
    res.json({ success: "Se ha modificado el registro." });
});

router.delete("/:filmId", async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId },
    });
    res.json({ success: "Se ha borrado el registro." });
});

module.exports = router;
