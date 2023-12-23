
const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.header,req.method);
    //process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>Welcome to my Node Js project</body>');
    res.write('</html>');
    const parseUrl=url.parse(req.url,true);
    const path=parseUrl.pathname;

 if(path === '/home'){
    res.end('Welcome home');
}else if(path === '/about'){
    res.end('Welcome to About Us page');
}else if(path === '/node'){
    res.end('Welcome to my Node Js project');
}
});

server.listen(4000);
