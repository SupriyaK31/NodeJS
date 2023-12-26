const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
