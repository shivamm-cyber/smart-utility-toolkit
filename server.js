const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Smart Utility Toolkit</h1>");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1><p>This is a Node.js project using core modules only.</p>");
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact</h1><p>Email: student@example.com</p>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
