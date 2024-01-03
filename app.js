
const express=require('express');
const bodyParser = require('body-parser');

const app=express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended:false}));
//FILTER PATHS;
//app.use('/admin',adminRoutes);
app.use(adminRoutes);
//app.use(shopRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!!!!!</h1>');
});
//  const server=http.createServer(app);
// console.log(route.someText);

// const server=http.createServer(route.handler);
 app.listen(3000);

