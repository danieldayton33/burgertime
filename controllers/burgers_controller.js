const burger = require("../models/burger");
const express = require("express");

const router = express.Router();



router.get("/",(req,res)=>{
    burger.all(function(data){
        // console.log(data);
       const handleBarObject = {
            burger: data
        }
        // console.log("HBO", handleBarObject);
        res.render("index", handleBarObject);
    });
});

router.post("/api/burger", (req, res)=>{
    console.log("REQ.body", req.body);
    const newBurger = req.body.burger_name;
    console.log(newBurger)
    burger.one(newBurger,function(data){
        res.json({id: data.insertId});
    });
    // res.json(true);
});

router.put("/api/burger", (req,res)=>{
    const eatenBurger = req.body.id;
    burger.update(eatenBurger, function(data){
        if(data.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;