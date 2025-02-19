const express =require("express");
const { getproducts, getsingleproduct } = require("../controllers/productcontrollers");
const router=express.Router();


router.route("/products").get(getproducts);
router.route("/products/:id").get(getsingleproduct);

module.exports=router;
