const express=require('express');
const router=express.Router();
router.get('/product',(req,res,next)=>{
    console.log('another Middleware');
    res.setHeader('content-type','text/html');
    //FILTER PATHS
    //res.send('<form action="/admin/add-product" method="Post"><input type="text" name="title"><button type="submit">Add Product</button></form>');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    res.send('<form action="/add-product" method="Post"><input type="text" name="title"><button type="submit">Add Product</button></form>');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
  res.redirect('/');
 
});
module.exports=router;