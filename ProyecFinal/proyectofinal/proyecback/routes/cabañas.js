const express = require("express");
const router = express.Router();
const model = require("./../models/cabañas");


const all = async (req, res) => {
   const cabañas = await model.get();
   res.json(cabañas);
      //res.render('cabañas', {cabañas});
};

/**const single = async (req, res) => {
    const cabañas = await model.get(req.params);
}; */

const create = (req, res) => { 
   console.log(req.body); 
   res.end(); 
}; 

router.post("/create", create);
router.get("/all", all);

module.exports = router