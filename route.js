
const fs = require('fs');

const requestHandler=((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        const data = fs.readFileSync('message.txt');
    //console.log(data);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`<body>
        <form action="/message" method="POST"><h1>${data}</h1><input type="text" name="message">
        <button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            
            const message = parseBody.split('=')[1];

            fs.writeFileSync('message.txt', message);
            res.writeHead(302, {
                'Location': '/'
            });
            return res.end();
        });
    }


    res.writeHead(404, {
        'Content-Type': 'text/html'
    });
    res.write('<html><body><h1>Not Found</h1></body></html>');
    return res.end();
});

//1. module.exports = requestHandler;

//2. module.exports={
//     handler:requestHandler,
//     someText:'Some Text Here'
// }

// 3.module.exports.handler=requestHandler;
// module.exports.someText="some text here";
//4.
exports.handler=requestHandler;
exports.someText="Some text here";