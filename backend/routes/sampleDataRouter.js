const express = require('express');
const router = express.Router();


//api endpoints
router.get('/sampledata',(req,res)=>{

    //to retrive data from mongodb
    res.json({message:'Data endpoint'});
});

module.exports = router;