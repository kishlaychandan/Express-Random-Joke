// import axios from "axios";
// import http from "http";

// const port = 8080;

// const helper = async () => {
//     const response = await axios.get("https://icanhazdadjoke.com/", {
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     return response.data;
// }

// const server = http.createServer(async (request, response) => {
//     if (request.method === "GET") {
//         response.writeHead(200, { "Content-Type": "application/json" });
//         const joke = await helper();
//         response.end(JSON.stringify({ joke }));
//     }
// });

// server.listen(port, () => {
//     console.log("Server started at port " + port);
// });

import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 8080;

const helper = async () => {
    const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });
    return response.data;
}

app.get("/", async (req, res) => {
    const joke = await helper();
    res.json({ joke });
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});