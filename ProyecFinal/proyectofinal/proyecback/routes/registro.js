const express = require('express');
const router = express.Router();
const {send} = require('./../services/mail');

const showView = (req, res) => res.render('registro');

const create = async (req, res) => {
    try {
        const { body: usuario } = req;
        const { mail, nombre, apellido } = usuario;
        const mailObject = {
            mail,
            message: `
                <h2>¡Gracias por registrarte ${nombre} ${apellido}!</h2>
                <h3>No olvides verificar tu cuenta haciendo</h3>
                <a href="">CLICK AQUÍ</a>
            `   
        };
        await send(mailObject);
        res.render("registro", {
            message:"Usuario registrado, revise su casilla de correo electrónico",
        });
    } catch (e){
        console.log(e);
    }
};

router.get('/', showView);
router.post('/create', create);
module.exports = router;