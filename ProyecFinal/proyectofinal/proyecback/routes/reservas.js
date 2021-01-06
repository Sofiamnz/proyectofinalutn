const express = require("express");
const router = express.Router();
const model = require("./../models/reservas");

const all = async (req, res) => {
    try {
        const reservas = await model.get();
        //res.json(result);
        res.render('reservas', { reservas: reservas });
    } catch (e) {
        res.render("error");
    }
};

const single = async (req, res) => {
    const {id} = req.params;
    const reservas = await model.single(id);
    res.render('reservas', { reservas });
    //res.json({ reservas });
};

router.get('/single/:idReservas', single);
router.get("/all", all);

module.exports = router;