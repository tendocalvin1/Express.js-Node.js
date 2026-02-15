// 🧪 Exercise 1 — Echo Server

// Whatever JSON is sent, return it exactly as received.

import http from 'http';

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {

    if (req.url === '/echo' && req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {

            try {
                const parsedData = JSON.parse(body);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(parsedData));

            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }

        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h3>Page not found</h3>');
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
