const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const {auth} = require("./../models/usuarios");

const login = async (req, res)=> {
    req.body.password = sha1(req.body.password);    
    const result = await auth(req.body);
    
    if (result.lenght === 0)
    res.render("login", { message: "User o password incorrecto" });
    
    const [{idUsuario}] = result; 
};

router.get('/',(req, res)=> {
    res.render('login',{});
});

router.post('/',login);

module.exports = router;