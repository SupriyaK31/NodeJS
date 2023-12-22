const http=require('http');

function rqListener(){

}
const server=http.createServer((req,res)=>{
    console.log(res);
    res.end("Supriya Kittur");
});

server.listen(4000,()=>console.log("supriya"));
