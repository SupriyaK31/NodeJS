const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('in Middleware');
    res.send('<h1>Hello in Express js</h1>');
});

module.exports=router;