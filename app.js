const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
   res.send('<form action="/product" method="post">Title:<input type="text" name="title"/>Size:<input type="text" name="size"/><button type="submit">Add Product</button></form>');
   console.log('In Middleware');
});
app.use('/product',(req,res)=>{
   console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res)=>{
   res.send('<h1>Hello from express</h1>');
    console.log('In another Middleware');
    
 });
const server=http.createServer(app);
server.listen(3000);

